import React from 'react'

const ImageCard = (props) => {
  return (
    <div className='w-60 overflow-hidden shadow-sm mx-5 my-3'>
      <img className="w-full border" src={props.Url} />
      <div className="px-6 py-4 shadow-md">
        <div className="font-bold mb-2 text-xl text-purple-600">Photo by {props.author}</div>
        <ul>
          <li><strong>Views: {props.views}</strong></li>
          <li><strong>Downloads: {props.downloads}</strong></li>
          <li><strong>likes: {props.likes}</strong></li>
        </ul>
      </div>
    </div>
  )
}

export default ImageCard