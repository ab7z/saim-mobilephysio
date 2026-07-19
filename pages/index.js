import Seo from '../components/Seo';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Area from '../components/Area';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Form from '../components/Form';
import Contact from '../components/Contact';
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, getHomeStructuredData } from '../lib/seo';

export default function Home() {
    return (
        <>
            <Seo
                title={ DEFAULT_TITLE }
                description={ DEFAULT_DESCRIPTION }
                path="/"
                structuredData={ getHomeStructuredData() }
            />

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
