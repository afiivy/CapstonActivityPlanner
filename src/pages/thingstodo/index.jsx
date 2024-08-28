import React from 'react';
import Header from '@/components/Header';
import CarouselPage from '@/components/Carousel';
import SuggestionForm from '@/components/SuggestionForm';
import Footer from '@/components/Footer';


export default function ThingsToDo() {
  return (
    <>
      <Header />
      <div className="todo">
        <h1>Ideas For Fun Activities</h1>
        <CarouselPage />
        <SuggestionForm />
        <div className='toDoBottom'>
        <Footer />
      </div>
      </div>
    </>
  );
}
