'use client';

import { useRouter } from "next/router";
import { toast } from 'react-toastify';


export default function AddMovieForm() {
  const router = useRouter();
  
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const category = formData.get('category') as string;

    if (!name || !category) return

    const newMovie = {
      imageUrl: '',
      name,
      category
    }

    const response = await fetch('/api/movie', 
      { 
        method: 'PUT', 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie) 
      }
    )

    if (response.status !== 200) toast.error(`Error adding movie`)
    else toast.success(`Movie ${name} was added`)
  }
 

  return (
    <div className="max-w-[600px] m-auto">
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-5"> 
        <input type="text" name="name" placeholder="movie title" className="rounded p-1"/>
        <input type="text" name="category" placeholder="movie category" className="rounded p-1"/>
        <button 
          className='bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 rounded'
          type="submit"
        >
          add new movie ➕
        </button>
      </form>
    </div>
  )
}
