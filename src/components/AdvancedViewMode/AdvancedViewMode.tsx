'use client'

import React, { useEffect, useRef } from 'react'
import {
  Bodies,
  Engine,
  World,
  MouseConstraint,
  Mouse,
  // Render,
} from 'matter-js'
import Render from './Render'

import summaryJSON from '@/data/summary.json'
import experienceJSON from '@/data/experience.json'
import technologiesJSON from '@/data/technologies.json'
import achievementsJSON from '@/data/achievements.json'
import educationJSON from '@/data/education.json'

import { figuresTypes, getFigure } from '@/components/AdvancedViewMode/utils'

const data = [
  ...summaryJSON,
  ...experienceJSON,
  ...technologiesJSON,
  ...achievementsJSON,
  ...educationJSON,
]

const AdvancedViewMode = () => {
  const scene = useRef<HTMLElement | null>(null)
  const isPressed = useRef(false)
  const engine = useRef(Engine.create())

  useEffect(() => {
    const cw = document.body.clientWidth
    const ch = document.body.clientHeight

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'transparent',
      },
    })

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ])

    Engine.run(engine.current)
    Render.run(render)

    const mouse = Mouse.create(render.canvas)
    const mouseConstraint = MouseConstraint.create(engine.current, {
      element: scene.current,
      constraint: {
        render: {
          visible: false,
        },
      },
      mouse: Mouse.create(render.canvas),
    })

    World.add(engine.current.world, mouseConstraint)

    render.mouse = mouse

    return () => {
      Render.stop(render)
      World.clear(engine.current.world, true)
      Engine.clear(engine.current)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
    }
  }, [])

  useEffect(() => {
    // const figures = data.map((item) => {
    //   return getFigure(
    //     figuresTypes[Math.floor(Math.random() * figuresTypes.length)]
    //   )
    // })

    const body = Bodies.circle(10, 10, 50, {
      restitution: 0.9,
      render: {
        fillStyle: 'pink',
        text: {
          content: 'Test',
          color: 'blue',
          size: 16,
          family: 'Papyrus',
        },
      },
    })

    const figures = [body]

    World.add(engine.current.world, figures)

    // const render = () => {
    //   const elem = document.querySelector('#box')
    //   if (!elem) return
    //
    //   console.log(body.position)
    //   const { x, y } = body.position
    //   elem.style.position = 'absolute'
    //   elem.style.top = `${y}px`
    //   elem.style.left = `${x}px`
    //   elem.style.transform = `rotate(${body.angle}rad)`
    // }

    // const rerender = () => {
    //   render()
    //   return requestAnimationFrame(rerender)
    // }
    // const id = rerender()
    //
    // return () => {
    //   cancelAnimationFrame(id)
    // }
  }, [])

  return (
    <div style={{ width: '100vh', height: '100vh' }}>
      {/*<div id="box">*/}
      {/*  <h1>hello world</h1>*/}
      {/*</div>*/}
      <div ref={scene} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default AdvancedViewMode
