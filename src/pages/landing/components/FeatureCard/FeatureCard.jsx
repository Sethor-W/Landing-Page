import React from 'react'

export default function FeatureCard({img, slogan, title, description}) {
  return (
    <div>
        <img src={img} alt={title} />
        <div className='text-sm'>{slogan}</div>
        <h3>{title}</h3>
        <p className='text-sm'>{description}</p>
        <a href="" className='text-sm'>Conocer Más {'->'}</a>
    </div>
  )
}
