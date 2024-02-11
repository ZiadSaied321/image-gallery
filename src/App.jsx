import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
const App = () => {
  const [images, setImages] = useState([
    {user:'',previewURL:'',views:'',likes:'',downloads:'', id : '0'}
  ])
  const [term, setTerm] = useState('')
  
  useEffect(()=>{
    async function fetchImages(){
      const responce = await fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${term}`)
      const data = await responce.json()
      //console.log(data.hits)
      setImages([...(data.hits)])
    }
    fetchImages()
    },
    [term])
  return (
    <div className='flex flex-wrap justify-center'>
    <div className='w-full h-24 px-32 py-8'>
      <input onChange={(e)=>{
        setTerm(e.target.value)
      }} className='border-2 rounded-xl w-full h-10 px-4' type="text" />
    </div>
    {images.map((image)=><ImageCard key = {image.id} author = { image.user} Url ={image.previewURL} views ={image.views} likes={image.likes} downloads={image.downloads}/>)}
    </div>
    

  )
}

export default App