"use client"

import { useEffect, useRef } from "react"

const cloudTemplates = [
  [
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
  ],
  [
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  ],
  [
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  ],
]

class Cloud {
  x: number
  y: number
  template: number[][]
  speed: number
  color: string
  opacity: number
  glowIntensity: number
  scale: number

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.template = cloudTemplates[Math.floor(Math.random() * cloudTemplates.length)]
    this.speed = Math.random() * 0.3 + 0.1
    this.color = `hsl(${Math.random() * 60 + 180}, 100%, 75%)`
    this.opacity = Math.random() * 0.4 + 0.2
    this.glowIntensity = Math.random() * 15 + 5
    this.scale = Math.random() * 0.5 + 0.8
  }

  update(canvasWidth: number) {
    this.x += this.speed
    if (this.x > canvasWidth) {
      this.x = -this.template[0].length * 6
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.shadowColor = this.color
    ctx.shadowBlur = this.glowIntensity
    ctx.fillStyle = this.color

    const pixelSize = 6 * this.scale

    for (let y = 0; y < this.template.length; y++) {
      for (let x = 0; x < this.template[y].length; x++) {
        if (this.template[y][x]) {
          ctx.fillRect(
            this.x + x * pixelSize,
            this.y + y * pixelSize,
            pixelSize,
            pixelSize
          )
        }
      }
    }

    ctx.restore()
  }
}

export function PixelClouds() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const resizeCanvas = () => {
      const scale = window.devicePixelRatio
      canvas.width = window.innerWidth * scale
      canvas.height = window.innerHeight * scale
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(scale, scale)
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const clouds: Cloud[] = []
    for (let i = 0; i < 35; i++) {
      clouds.push(new Cloud(canvas.width, canvas.height))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
     
     
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      clouds.forEach((cloud) => {
        cloud.update(canvas.width)
        cloud.draw(ctx)
      })
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}

