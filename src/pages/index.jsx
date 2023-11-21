import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import NavBar from './landing/components/NavBar/NavBar'
import Popup from './landing/components/Popup/Popup'
import { useState } from 'react'
import Footer from './landing/components/Footer/Footer'
import Link from 'next/link'
import Form from './landing/components/Form/Form'
import Video from './landing/components/Video/Video'
import P from './landing/components/Text/P'
import ButtonActivePopup from './landing/components/Buttons/ButtonActivePopup/ButtonActivePopup'
import CarruselContainer from './landing/components/Carrusel/CarruselContainer'
import CarruselCart from './landing/components/Carrusel/CarruselCart'
import SectionVideo from './landing/components/Sections/SectionVideo'
import Landing from './Landing'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sethor</title>
        <meta property="og:title" content="Sethor" key="title" />
        <meta property="og:description" content="Una puerta a dos mundos: Seremos una tecnología hibrida entre una billetera digital y un comercio electrónico, donde las personas aparte de obtener los beneficios de ambas, podrán utilizar tanto sus rostros como sus huellas, como método de pago en cualquier lugar o momento" />
        <meta property="og:image" content="https://www.sethor.tech/logo/Logotipo.svg" />
      </Head>
      <Landing/>
    </div>
  )
}