import React from 'react'

export default function FeatureCard({img, slogan, title, description}) {
  return (
    <div className='min-w-fit md:min-w-[20rem] md:w-full'>
        <img src={img} alt={title} className='rounded-lg' />
        <div className='text-sm'>{slogan}</div>
        <h3 className='text-base'>{title}</h3>
        <p className='text-sm'>{description}</p>
        <a href="" className='text-sm'>Conocer Más +</a>
    </div>
  )
}
