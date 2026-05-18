import '../styles/globals.css';
import Layout from '../components/Layout';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Manrope, JetBrains_Mono } from 'next/font/google';

config.autoAddCss = false;

const manrope = Manrope({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-manrope',
});

const jetbrainsMono = JetBrains_Mono({
    weight: ['400', '500'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mono',
});

export default function MyApp({ Component, pageProps }) {
    return (
        <div className={`${manrope.variable} ${jetbrainsMono.variable}`}>
            <Layout>
                <Component { ...pageProps } />
            </Layout>
        </div>
    );
}
