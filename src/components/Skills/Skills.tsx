import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="py-10">
      <a
        href="#skills"
        className="text-xl cursor-pointer border-b-gray-300 border-b block pb-2 dark:border-b-gray-200 "
      >
        Что я умею:
      </a>
      <div className="py-10 text-lg">
        <p>
          Мой основной стек технологий это: React, Typescript, react-query,
          Material UI
        </p>
        <br />
        <p>
          Однако я всегда буду рад изучить что-то новое. Например когда я только
          искал первую работу я сделал маленькую игру на{' '}
          <a
            href="https://sfkhakimov.github.io/simon_the_game/"
            target="_blank"
            className="cursor-pointer text-blue-500 hover:underline"
          >
            Vue.
          </a>
        </p>
        <br />
        <p>
          Но если вернутся к тому, что я еще знаю то вот примерный список 👇
        </p>
        <p>Gatsby, nx, vite, webpack, sass, БЭМ, react-router, mobx</p>
        <br />
        <p>Также есть небольшой опыт с: next, nest, express, python, django</p>
      </div>
    </section>
  )
}

export default Skills
