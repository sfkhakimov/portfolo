import { Bodies } from 'matter-js'

export enum FigureType {
  Circle = 'Circle',
  Rectangle = 'Rectangle',
  Trapezoid = 'Trapezoid',
  FromVertices = 'FromVertices',
}

export const figuresTypes = [
  FigureType.Circle,
  FigureType.Rectangle,
  FigureType.Trapezoid,
  FigureType.FromVertices,
]

export const getFigure = (type: FigureType) => {
  const innerWidth = window.innerWidth
  const innerHeight = window.innerHeight

  const x = Math.floor(Math.random() * (innerWidth - 1) + 1)
  const y = Math.floor(Math.random() * (innerHeight - 1) + 1)

  const baseSizePercentage = 0.15

  const width = innerWidth * baseSizePercentage
  const height = innerHeight * baseSizePercentage

  switch (type) {
    case FigureType.Circle:
      return Bodies.circle(x, y, width / 2, {
        mass: 10,
        restitution: 0.9,
        friction: 0.005,
        render: {
          fillStyle: '#3b82f6',
        },
      })

    case FigureType.Rectangle:
      return Bodies.rectangle(x, y, width, height, {
        mass: 10,
        restitution: 0.9,
        friction: 0.005,
        render: {
          fillStyle: '#3b82f6',
        },
      })

    case FigureType.Trapezoid:
      return Bodies.trapezoid(x, y, width, height, 1, {
        mass: 10,
        restitution: 0.9,
        friction: 0.005,
        render: {
          fillStyle: '#3b82f6',
        },
      })

    case FigureType.FromVertices:
      const vertices = Array.from({ length: 8 }, (_, i) => {
        const angle = (i * Math.PI * 2) / 8
        const vx = x + (Math.cos(angle) * width) / 2
        const vy = y + (Math.sin(angle) * height) / 2
        return { x: vx, y: vy }
      })

      return Bodies.fromVertices(x, y, [vertices], {
        mass: 10,
        restitution: 0.9,
        friction: 0.005,
        render: {
          fillStyle: '#3b82f6',
        },
      })
  }
}
