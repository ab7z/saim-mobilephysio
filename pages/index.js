import Header from '../components/Header';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Price from '../components/Price';
import Form from '../components/Form';
import Contact from '../components/Contact';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Saim Mobilephysio</title>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <html lang={ 'de-DE' }/>
                <meta name="language" content="de"/>
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
                <link rel="mask-icon" href="/safari-pinned.tab.svg"/>
                <meta name="description" content="Saim Mobilephysio Sankt Augustin. Faranak Nokhbehzaeem ist staatlich
                anerkannte Manualtherapeutin, Physiotherapeutin, Ödemtherapeutin und Personal Trainerin und bietet
                Hausbesuche in Sankt Augustin und Umgebung."/>
                <link rel='canonical' href="https://saim-mobilephysio.de/"/>
                <meta property="og:title" content="Saim Mobilephysio" />
                <meta property="og:description" content="Saim Mobilephysio Sankt Augustin. Faranak Nokhbehzaeem ist staatlich
                anerkannte Manualtherapeutin, Physiotherapeutin, Ödemtherapeutin und Personal Trainerin und bietet
                Hausbesuche in Sankt Augustin und Umgebung." />
                <meta property="og:url" content="https://saim-mobilephysio.de" />
                <meta property="og:type" content="website" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto&amp;display=swap" rel="stylesheet"/>
            </Head>
            <Header/>
            <Intro/>
            <Services/>
            <Price/>
            <Form/>
            <Contact/>
        </>
    );
}
