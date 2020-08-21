// Module imports
import React, { Component } from 'react';

// Asset imports
import 'assets/css/home.css';

// Component imports
import Header from 'components/header';
import Jumbo from 'components/home/jumbo';
import Logos from 'components/home/logos';
import Banner from 'components/home/banner';
import About from 'components/home/about';
import Howitworks from 'components/home/howItWorks';
import Testimonials from 'components/home/testimonials';
import Contact from 'components/home/contact';
import Footer from 'components/footer';

// Start && Export Component
export default class Home extends Component {
  render = () => (
    <>
      <Header />
      <main>
        <Jumbo />
        <Logos />
        <Banner />
        <About />
        <Howitworks />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
