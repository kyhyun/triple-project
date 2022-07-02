import { useEffect, useState, useRef } from 'react'

import { easeOutExpo } from 'utils/animation'

const fps = 1000 / 60

function useCounter(end: number, duration = 2000) {
  const countRef = useRef(0)
  const [count, setCount] = useState(0)

  const totalFps = Math.round(duration / fps)

  useEffect(() => {
    const counter = setInterval(() => {
      const progress = easeOutExpo(++countRef.current / totalFps)
      setCount(Math.round(end * progress))

      if (progress === 1) {
        clearInterval(counter)
      }
    }, fps)
  }, [duration, end, totalFps])
  return count
}

export default useCounter
