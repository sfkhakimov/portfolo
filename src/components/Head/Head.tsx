'use client'

import React, { useEffect, useState } from 'react'

import { FaSun } from 'react-icons/fa6'
import { FaMoon } from 'react-icons/fa'
import { motion } from 'framer-motion'

const socials = [
  {
    link: 'https://t.me/sfkhakimov',
    label: 'tg',
    color: 'text-blue-500',
  },
  {
    link: 'https://www.instagram.com/s.f.khakimov/',
    label: 'inst',
    color: 'text-red-500',
  },
  {
    link: 'mailto: s.f.khakimov@gmail.com',
    label: 'email',
  },
]

const Head = () => {
  const [theme, setTheme] = useState<'dark' | 'light' | null>(null)

  const handleChangeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    if (!theme) return

    localStorage.theme = theme
  }, [theme])

  return (
    <section>
      <div className="flex justify-between h-14 align-center border-b-gray-300 dark:border-b-gray-200 border-b">
        <p className="hover:cursor-pointer my-auto text-2xl font-bold">
          <a href="/">SK</a>
        </p>
        <div className="my-auto">
          <button onClick={handleChangeTheme} className="cursor-pointer">
            <motion.div
              key={theme}
              initial={{ scale: 0 }}
              animate={{ rotate: 180, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              {theme === 'dark' ? (
                <FaSun fontSize={24} className="text-yellow-400" />
              ) : (
                <FaMoon fontSize={24} className="text-blue-700" />
              )}
            </motion.div>
          </button>
        </div>
      </div>
      <div className="py-20 md:py-40">
        <h1 className="max-w-3xl mx-auto">
          <p className="text-2xl font-bold">Привет 👋</p>
          <br />
          <p className="text-xl">
            Меня зовут Шакир! Я Frontend разработчик из России 🇷🇺 проживающий в
            Казахстане 🇰🇿
          </p>
          <br />
          <p className="text-xl">
            Я работаю в{' '}
            <a
              href="https://www.roseltorg.ru/"
              target="_blank"
              className="cursor-pointer text-blue-500 hover:underline "
            >
              АО &ldquo;ЕЭТП&ldquo;
            </a>{' '}
            и разрабатываю фронтенд часть{' '}
            <a
              href="https://business.roseltorg.ru"
              target="_blank"
              className="cursor-pointer text-blue-500 hover:underline "
            >
              Росэлторг.Бизнес
            </a>
          </p>
          <br />
          <p className="text-xl">
            В свободное время пишу разные проекты, например недавно сделал свою
            библиотеку{' '}
            <a
              href="https://react-voyager.site/"
              target="_blank"
              className="cursor-pointer text-blue-500 hover:underline "
            >
              react-voyager
            </a>
          </p>
        </h1>
        <div className="mx-auto md:pt-24 pt-12 flex justify-center columns-3 gap-3">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              className={`cursor-pointer hover:underline ${item.color}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Head
