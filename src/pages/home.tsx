import React from 'react';
import Hero from '@/components/Hero';
import Middle from '@/components/Middle';
import Footer from '@/components/Footer';
import Landing from '@/components/Landing';
export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <Landing />
      <Hero />
      <Middle />
      <Footer />
    </main>
  );
}