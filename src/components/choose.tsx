'use client';

import { Movie } from "@/types/movie";

type ChooseProps = {
  possibilities: Movie[]
}

export default function Choose({ possibilities }: ChooseProps) {
  function getRandomPosition(array: Movie[]) {
    if (array.length === 0) {
      return null;
    }
  
    const randomIndex = Math.floor(Math.random() * array.length); 
    alert(array[randomIndex].name)
    return array[randomIndex]; 
  }
  

  return (
    <div className='flex items-center justify-center p-2'>
      <button 
        className='bg-blue-500 px-3 sm:px-6 py-2 text-white hover:bg-blue-600 rounded' 
        onClick={() => getRandomPosition(possibilities)}
      >
        CHOOSE {possibilities.length} ☝🏻
      </button>
    </div>
  )
}
