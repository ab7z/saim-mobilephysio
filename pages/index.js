import Header from '../components/Header';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Price from '../components/Price';
import Form from '../components/Form';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
            <Header/>
            <Intro/>
            <Services/>
            <Price/>
            <Form/>
            <Contact/>
        </>
    );
}
