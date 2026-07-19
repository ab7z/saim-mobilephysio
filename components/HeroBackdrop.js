import { useEffect, useRef } from 'react';
import styles from '../styles/components/HeroBackdrop.module.css';

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;

const vec3 CREAM = vec3(0.961, 0.945, 0.925);
const vec3 GREEN = vec3(0.220, 0.659, 0.082);

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float blob(vec2 p, vec2 c, float r) {
  vec2 d = (p - c) / r;
  return exp(-dot(d, d));
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  float ar = uRes.x / uRes.y;
  vec2 p  = vec2(uv.x * ar, uv.y);
  float t = uTime * 0.25;

  vec2 cA = vec2(ar * 0.70 + 0.45 * sin(t * 0.70),       0.55 + 0.35 * cos(t * 0.55));
  vec2 cB = vec2(ar * 0.85 + 0.40 * cos(t * 0.80 + 1.7), 0.35 + 0.30 * sin(t * 0.65 + 1.0));
  vec2 cC = vec2(ar * 0.78 + 0.50 * sin(t * 0.45 + 3.1), 0.75 + 0.25 * cos(t * 0.90));

  float a = blob(p, cA, 0.28);
  float b = blob(p, cB, 0.25);
  float c = blob(p, cC, 0.30);

  float field = a + b + c;
  float dense = smoothstep(0.08, 0.95, field);
  float side  = smoothstep(0.40, 0.95, uv.x);

  vec3 col = mix(CREAM, GREEN, dense * side * 0.40);
  col += (hash(gl_FragCoord.xy) - 0.5) * 0.015;

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl, type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        gl.deleteShader(sh);
        return null;
    }
    return sh;
}

export default function HeroBackdrop() {
    const wrapRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const wrap = wrapRef.current;
        if (!canvas || !wrap) return;

        const gl = canvas.getContext('webgl', { antialias: false, alpha: false, premultipliedAlpha: false, preserveDrawingBuffer: false, powerPreference: 'low-power' });
        if (!gl) return;

        const vs = compile(gl, gl.VERTEX_SHADER, VERT);
        const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
        if (!vs || !fs) return;

        const prog = gl.createProgram();
        gl.attachShader(prog, vs);
        gl.attachShader(prog, fs);
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
        gl.useProgram(prog);

        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        const aPos = gl.getAttribLocation(prog, 'aPos');
        gl.enableVertexAttribArray(aPos);
        gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

        const uRes = gl.getUniformLocation(prog, 'uRes');
        const uTime = gl.getUniformLocation(prog, 'uTime');

        const SCALE = 0.5;
        let width = 0, height = 0;

        const resize = () => {
            const rect = wrap.getBoundingClientRect();
            const w = Math.max(1, Math.round(rect.width * SCALE));
            const h = Math.max(1, Math.round(rect.height * SCALE));
            if (w === width && h === height) return;
            width = w; height = h;
            canvas.width = w;
            canvas.height = h;
            gl.viewport(0, 0, w, h);
            gl.uniform2f(uRes, w, h);
        };

        const draw = (time) => {
            gl.uniform1f(uTime, time * 0.001);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
        };

        const reduceMotion = typeof window.matchMedia === 'function'
            && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let rafId = 0;
        let running = false;
        let visible = true;
        let inView = true;

        const loop = (t) => {
            draw(t);
            rafId = requestAnimationFrame(loop);
        };

        const start = () => {
            if (running || reduceMotion) return;
            running = true;
            rafId = requestAnimationFrame(loop);
        };

        const stop = () => {
            if (!running) return;
            running = false;
            cancelAnimationFrame(rafId);
        };

        const evaluate = () => {
            if (visible && inView) start();
            else stop();
        };

        resize();
        draw(0);

        const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => { resize(); if (!running) draw(performance.now()); }) : null;
        if (ro) ro.observe(wrap);
        else window.addEventListener('resize', resize);

        const onVis = () => { visible = !document.hidden; evaluate(); };
        document.addEventListener('visibilitychange', onVis);

        const io = typeof IntersectionObserver !== 'undefined'
            ? new IntersectionObserver((entries) => { inView = entries[0].isIntersecting; evaluate(); }, { threshold: 0 })
            : null;
        if (io) io.observe(wrap);

        if (!reduceMotion) start();

        return () => {
            stop();
            document.removeEventListener('visibilitychange', onVis);
            if (ro) ro.disconnect();
            else window.removeEventListener('resize', resize);
            if (io) io.disconnect();
            gl.deleteBuffer(buf);
            gl.deleteProgram(prog);
            gl.deleteShader(vs);
            gl.deleteShader(fs);
        };
    }, []);

    return (
        <div ref={ wrapRef } className={ styles.wrap } aria-hidden="true">
            <canvas ref={ canvasRef } className={ styles.canvas }/>
        </div>
    );
}
