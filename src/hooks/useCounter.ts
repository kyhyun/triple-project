import { useEffect, useState, useRef } from 'react'

function easeOut(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

const FPS = 1000 / 60

function useCounter(end: number, duration = 2000) {
  const counterRef = useRef(0)
  const [count, setCount] = useState(0)

  const totalFps = Math.round(duration / FPS)

  useEffect(() => {
    const counter = setInterval(() => {
      counterRef.current++
      const progress = easeOut(counterRef.current / totalFps)
      setCount(Math.round(end * progress))

      if (progress === 1) {
        clearInterval(counter)
      }
    }, FPS)
  }, [duration, end, totalFps])
  return count
}

export default useCounter
