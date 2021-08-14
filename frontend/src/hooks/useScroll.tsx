/*Hello I'm a custom hook hope I'll satisfy your scrolling needs!

In order to do that, do the following:

const { scrollX, scrollY, scrollDirection } = useScroll();
*/

import { useState, useEffect } from 'react'

type Hook = () => {
  scrollY: number | null
  scrollX: number | null
  scrollDirection: 'down' | 'up' | undefined
}

const useScroll: Hook = () => {
  // storing this to get the scroll direction
  const [lastScrollTop, setLastScrollTop] = useState(0)
  // the offset of the document.body
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  )
  // the vertical direction
  const [scrollY, setScrollY] = useState<number | null>(bodyOffset.top)
  // the horizontal direction
  const [scrollX, setScrollX] = useState<number | null>(bodyOffset.left)
  // scroll direction would be either up or down
  const [scrollDirection, setScrollDirection] = useState<
    'down' | 'up' | undefined
  >()

  const listener = () => {
    setBodyOffset(document.body.getBoundingClientRect())
    setScrollY(-bodyOffset.top)
    setScrollX(bodyOffset.left)
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up')
    setLastScrollTop(-bodyOffset.top)
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  })
  return {
    scrollY,
    scrollX,
    scrollDirection,
  }
}
export default useScroll
