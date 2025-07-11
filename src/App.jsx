import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Business from './components/Business';
import Billing from './components/Billing';
import CardDeal from './components/CardDeal';
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import CTA from "./components/CTA";

import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Nav />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Partners/>
      <CTA />
      <Footer />
      
    </div>
  );
}

export default App;

