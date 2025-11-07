import React from 'react';
import Contact from '../components/Contact';
import Form from '../components/Form';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Price from '../components/Price';
import Services from '../components/Services';
import Layout from '../components/Layout';

export default function Home() {
    return (
        <Layout>
            <Header />
            <Intro />
            <Services />
            <Price />
            <Form />
            <Contact />
        </Layout>
    );
}
