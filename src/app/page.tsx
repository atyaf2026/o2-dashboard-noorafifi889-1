import React from 'react';
import HomePage from '../components/ui/Home/HomePage';

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-5 lg:p-6">
      <div className="max-w-[1600px] mx-auto">
        <HomePage />
      </div>
    </main>
  );
}