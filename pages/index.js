import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Area from '../components/Area';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Form from '../components/Form';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
            <Head>
                <title>Saim Mobilephysio – Mobile Physiotherapie in Sankt Augustin</title>
                <meta
                    name="description"
                    content="Mobile Physiotherapie in Sankt Augustin. Manualtherapie, Lymphdrainage, Personal Training und Honorarkatalog. Hausbesuche im Umkreis von 30 km."
                />
                <meta
                    property="og:title"
                    content="Saim Mobilephysio – Mobile Physiotherapie in Sankt Augustin"
                />
                <meta property="og:url" content="https://saim-mobilephysio.de"/>
                <meta
                    name="twitter:title"
                    content="Saim Mobilephysio – Mobile Physiotherapie"
                />
            </Head>

            <Hero/>
            <About/>
            <Services/>
            <Pricing/>
            <Area/>
            <Testimonials/>
            <Faq/>
            <Form/>
            <Contact/>
        </>
    );
}
