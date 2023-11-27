import { Bodies, IBodyDefinition } from 'matter-js'
import { colors } from '@/constants/colors'

export enum FigureType {
  Circle = 'Circle',
  Square = 'Square',
  Pentagon = 'Pentagon',
  Semicircle = 'Semicircle',
  Triangle = 'Triangle',
}

export const figuresTypes = [
  FigureType.Circle,
  FigureType.Square,
  FigureType.Semicircle,
  FigureType.Pentagon,
  FigureType.Triangle,
]

export const getFigure = (type: FigureType) => {
  const innerWidth = window.innerWidth
  const innerHeight = window.innerHeight

  const x = Math.floor(Math.random() * (innerWidth - 1) + 1)
  const y = Math.floor(Math.random() * (innerHeight - 1) + 1)

  const baseSizePercentage = 0.09

  const width = innerWidth * baseSizePercentage
  const height = innerHeight * baseSizePercentage

  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  const defaultOptions: IBodyDefinition = {
    restitution: 0.9,
    render: {
      fillStyle: randomColor,
      sprite: {},
    },
  }

  switch (type) {
    case FigureType.Circle:
      return Bodies.circle(x, y, width / 2, defaultOptions)

    case FigureType.Triangle: {
      const sides = 3 // Количество сторон треугольника
      const radius = width / 2

      const triangleVertices = []
      for (let i = 0; i < sides; i++) {
        const angle = (i / sides) * (2 * Math.PI)
        const vx = x + Math.cos(angle) * radius
        const vy = y + Math.sin(angle) * radius
        triangleVertices.push({ x: vx, y: vy })
      }

      return Bodies.fromVertices(x, y, [triangleVertices], defaultOptions)
    }

    case FigureType.Square:
      return Bodies.rectangle(x, y, width, width, defaultOptions)

    case FigureType.Pentagon: {
      const sides = 5
      const radius = width / 2

      const pentagonVertices = []
      for (let i = 0; i < sides; i++) {
        const angle = (i / sides) * (2 * Math.PI)
        const vx = x + Math.cos(angle) * radius
        const vy = y + Math.sin(angle) * radius
        pentagonVertices.push({ x: vx, y: vy })
      }

      return Bodies.fromVertices(x, y, [pentagonVertices], defaultOptions)
    }

    case FigureType.Semicircle:
      const semicircleVertices = []
      const segments = 30

      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI // Угол от 0 до π
        const vx = x + (Math.cos(angle) * width) / 2
        const vy = y + (Math.sin(angle) * height) / 2
        semicircleVertices.push({ x: vx, y: vy })
      }

      return Bodies.fromVertices(x, y, [semicircleVertices], defaultOptions)
  }
}
