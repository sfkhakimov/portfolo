import React from 'react'
import Head from '../Head/Head'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import Achievements from '../Achievements/Achievements'
import Footer from '../Footer/Footer'

const Main = () => {
  return (
    <div className="bg-orange-50 dark:bg-gray-800 px-4">
      <div className="mx-auto dark:text-gray-200 max-w-5xl">
        <Head />
        <About />
        <Skills />
        <Achievements />
        <Footer />
      </div>
    </div>
  )
}

export default Main
