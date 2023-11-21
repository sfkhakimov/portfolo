'use client'

import React, { useEffect, useRef } from 'react'
import { Bodies, Engine, Render, World } from 'matter-js'

import summaryJSON from '@/data/summary.json'
import experienceJSON from '@/data/experience.json'

import { colors } from '@/constants/colors'
import {
  figures,
  figuresTypes,
  getFigure,
} from '@/components/AdvancedViewMode/utils'

const data = [...summaryJSON, ...experienceJSON]

const AdvancedViewMode = () => {
  const scene = useRef()
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
    const innerWidth = window.innerWidth
    const innerHeight = window.innerHeight

    const x = Math.floor(Math.random() * (innerWidth - 1) + 1)
    const y = Math.floor(Math.random() * (innerHeight - 1) + 1)

    const figures = data.map((item) => {
      return getFigure(
        figuresTypes[Math.floor(Math.random() * figuresTypes.length)]
      )
    })

    World.add(engine.current.world, figures)
  }, [])

  const handleDown = () => {
    isPressed.current = true
  }

  const handleUp = () => {
    isPressed.current = false
  }

  const handleAddCircle = (e) => {
    if (isPressed.current) {
      const ball = Bodies.circle(
        e.clientX,
        e.clientY,
        10 + Math.random() * 30,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: '#0000ff',
          },
        }
      )
      World.add(engine.current.world, [ball])
    }
  }

  return (
    <div
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseMove={handleAddCircle}
      style={{ width: '100vh', height: '100vh' }}
    >
      <div ref={scene} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default AdvancedViewMode
