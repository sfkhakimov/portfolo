import React from 'react'

const Achievements = () => {
  return (
    <section id="achievements" className="py-10">
      <a
        href="#achievements"
        className="text-xl cursor-pointer border-b-gray-300 border-b block pb-2 dark:border-b-gray-200 "
      >
        Достижения:
      </a>
      <div className="py-10 text-lg">
        <p>
          Реализовал Справочный центр и сделал так, чтобы его страницы могли
          создавать аналитики, без задействования сил разработчиков. Расширил
          синтаксис mdx, обогатив их нужными нам компонентами, а также сделал
          так, чтобы все это работало и в закрытой части (spa на react) и в
          открытой (ssr на gatsby)
        </p>
        <br />
        <p>
          Обновил наш проект и монорепозеторий на 5 материал. Это была большая
          задача, в которой пришлось повозится с темой и общими компонентами
        </p>
        <br />
        <p>Реализовал аукционные торги с сокетами и графиком</p>
        <br />
        <p>
          Поменял сборщик с webpack на vite. Это помогло ускорить сборку проекта
          в дев режиме с 1м 30с до 2с!
        </p>
        <br />
        <p>Есть и другие достижения, но тут все не поместится :)</p>
      </div>
    </section>
  )
}

export default Achievements
