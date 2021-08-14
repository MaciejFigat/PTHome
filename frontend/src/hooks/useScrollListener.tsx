import { createContext, useState, useEffect } from 'react'

export default function useScrollListener() {
  const [data, setData] = useState<{
    x: number
    y: number
    lastX: number
    lastY: number
  }>({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      setData((last) => {
        return {
          x: window.scrollX,
          y: window.scrollY,
          lastX: last.x,
          lastY: last.y,
        }
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return data
}
// context is added so I could use listener elswhere in my app
export const ScrollContext: React.Context<null> = createContext(null)
