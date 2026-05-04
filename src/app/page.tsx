import React from 'react';
import HomePage from '../components/ui/Home/HomePage';

export default function Home() {
  return (
    <main className="min-h-screen  md:p-5 lg:p-6">
      <div className="max-w-[1600px] bg-[#F8FAFC]  mx-auto">
        <HomePage />
      </div>
    </main>
  );
}