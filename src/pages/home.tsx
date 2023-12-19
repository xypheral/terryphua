import React from 'react';
import Hero from '@/components/Hero';
import Middle from '@/components/Middle';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-2">
      <Hero />
      <Middle />
    </main>
  );
}