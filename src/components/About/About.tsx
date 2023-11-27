import React from 'react'
import plural from 'plural-ru'

const DATE_OF_BIRTH = '1993-09-21'
const About = () => {
  const age =
    new Date().getUTCFullYear() - new Date(DATE_OF_BIRTH).getUTCFullYear()

  return (
    <section id="about" className="py-10">
      <a
        href="#about"
        className="text-xl cursor-pointer border-b-gray-300 border-b block pb-2 dark:border-b-gray-200 "
      >
        Обо мне:
      </a>
      <div className="py-10 text-lg">
        <p>Мне {plural(age, '%d год', '%d года', '%d лет')}</p>
        <br />
        <p>
          Разработкой я увлекся в 2019 году. Свое обучение я начал с курсов от{' '}
          <a
            href="https://practicum.yandex.ru/"
            target="_blank"
            className="cursor-pointer text-blue-500 hover:underline"
          >
            Яндекс.Практикум
          </a>{' '}
          и после окончания я получил оффер
        </p>
        <br />
        <p>
          За пару лет я прошел путь от джуна до лида проекта. Управлял командой
          из 5 человек и занимался менторством. Мы смогли вывести площадку из
          бета версии в полноценный релиз с запуском тарификации 💵 💵 💵
        </p>
        <br />
        <p>
          Постоянно изучаю новые технологии, слушаю подкасты и делаю свои
          пет-проекты
        </p>
        <br />
        <p>
          Люблю открывать для себя новые места, хожу в горы а еще вкусно готовлю
          😋
        </p>
      </div>
    </section>
  )
}

export default About
