import React from 'react'

export default function FeatureCard({img, slogan, title, description}) {
  return (
    <div className='min-w-fit md:min-w-[20rem] md:w-full'>
        <img src={img} alt={title} className='rounded-lg' />
        <div className='text-base'>{slogan}</div>
        <h3 className='text-base'>{title}</h3>
        <p className='text-base'>{description}</p>
        <a href="" className='text-base'>Conocer Más +</a>
    </div>
  )
}
