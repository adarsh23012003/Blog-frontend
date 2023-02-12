import Image from 'next/image'
import React from 'react'

function Card(props) {
  return (
    <>
      <div className='w-72 bg-gray-100 p-3 rounded-lg cursor-pointer m-2'>
        <Image src={props.image} alt='Image' className='w-auto h-auto' height={200} width={200} />
        <h1 className='font-bold py-2'>{props.title}</h1>
        <p className='text-justify'>{props.description}</p>
      </div>
    </>
  );
}

export default Card