import React from 'react';
import Hero from '@/components/Hero';
import Middle from '@/components/Middle';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-2">
      <Hero />
      <Middle />
      <Footer />
    </main>
  );
}