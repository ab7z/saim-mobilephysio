import '../styles/globals.css';
import Layout from '../components/Layout';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Open_Sans, Roboto } from 'next/font/google';

config.autoAddCss = false;

const openSans = Open_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-open-sans',
});

const roboto = Roboto({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

export default function MyApp({ Component, pageProps }) {
    return (
        <div className={`${openSans.variable} ${roboto.variable}`}>
            <Layout>
                <Component { ...pageProps } />
            </Layout>
        </div>
    );
}
