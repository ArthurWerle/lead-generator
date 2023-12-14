'use client'

import { Movie } from "@/types/movie";
import { useState } from "react";
import Choose from "./choose";
import Loader from "./loader";
import { toast } from 'react-toastify';
import Modal from "./modal";

export default function MovieList({ movies }: { movies: Movie[] }) {
  const [selectedMovies, setSelectedMovies] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isModalLoading, setIsModalLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [aiResponse, setAiResponse] = useState('')

  function handleMovieSelection(movieId: number) {
    setSelectedMovies((prevSelectedMovies) => {
      if (prevSelectedMovies.includes(movieId)) {
        return prevSelectedMovies.filter((id) => id !== movieId)
      } else {
        return [...prevSelectedMovies, movieId]
      }
    })
  }

  async function deleteMovie() {
    setIsLoading(true)

    const response = await fetch('/api/movie', 
      { 
        method: 'POST', 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedMovies) 
      }
    )

    if (response.status !== 200) toast.error('Error deleting movie')

    setIsLoading(false)
    toast.success(`${selectedMovies.length} movies deleted`)
  }

  async function askAI() {
    setIsModalOpen(true)
    setIsModalLoading(true)

    const response = await fetch('/api/askai', 
    { 
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movies.filter(movie => selectedMovies.includes(movie.id))) 
    })

    if (response.status !== 200) {
      setIsModalOpen(false)
      toast.error('Error asking AI')
    }

    const data = await response.json()

    setAiResponse(data.result)
    setIsModalLoading(false)
  }

  function selectAllMovies() {
    if (selectedMovies.length === movies.length) return setSelectedMovies([])
    
    setSelectedMovies(movies.map(movie => movie.id))
  }

  function onCloseModal() {
    setAiResponse('')
    setIsModalOpen(false)
  }

  if (isLoading) return <Loader />


  return (
    <>
      <Modal isOpen={isModalOpen} title="AI 🤖" onClose={onCloseModal} isLoading={isModalLoading}>
        <p>{aiResponse}</p>
      </Modal>
      <button onClick={() => selectAllMovies()} className="italic underline mt-4">select all</button>
      <div className='flex gap-9 py-3 flex-wrap'>
        {movies.map((movie: Movie) => (
          <div 
            key={movie.id} 
            onClick={() => handleMovieSelection(movie.id)} 
            className={`cursor-pointer ${
              selectedMovies.includes(movie.id) ? 'text-blue-500' : ''
            }`}
          >
            <p className='font-bold'>{movie.name}</p>
            <p className="italic text-[10px]">{movie.category}</p>
          </div>
        ))}
      </div>
      <div className='flex w-full items-center justify-center p-10'>
        <Choose possibilities={movies.filter((movie: Movie) => selectedMovies.includes(movie.id))} />
        <div className='flex items-center justify-center p-2'>
          <button 
            className='bg-green-500 px-6 py-2 text-white hover:bg-green-600 rounded disabled:opacity-75 disabled:pointer-events-none' 
            onClick={() => askAI()}
          >
            ask AI 🤖
          </button>
        </div>
        <div className='flex items-center justify-center p-2'>
          <button 
            className='bg-red-500 px-6 py-2 text-white hover:bg-red-600 rounded disabled:opacity-75 disabled:pointer-events-none' 
            disabled={selectedMovies.length === 0}
            onClick={() => deleteMovie()}
          >
            delete 🗑️
          </button>
        </div>
      </div>
    </>
  )
}

