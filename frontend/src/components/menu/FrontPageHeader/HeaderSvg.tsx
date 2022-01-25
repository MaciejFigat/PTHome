import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HeaderSvgContainer, HeaderSvgItem } from './frontPageHeader.styled'
import { svgPathBirds } from './svgPathBirds'
import { svgPathSumo } from './svgPathSumo'
import { svgPathSumo2 } from './svgPathSumo2'
import { svgPathWoman } from './svgPathWoman'
import { svgPathHandstand } from './svgPathHandstand'
import { svgPathWrestlers } from './svgPathWrestlers'
import { svgPathAngryMan } from './svgPathAngryMan'

interface HeaderSvgProps {
  colorVisibleFill?: string
  colorVisibleStroke?: string
  colorHiddenFill?: string
  colorHiddenStroke?: string
  version?:
    | 'sumo'
    | 'birds'
    | 'sumo2'
    | 'woman'
    | 'wrestlers'
    | 'handstand'
    | 'angryMan'
}

const HeaderSvg: React.FC<HeaderSvgProps> = ({
  colorVisibleFill,
  colorVisibleStroke,
  colorHiddenFill,
  colorHiddenStroke,
  version,
}) => {
  const icon = {
    visible: {
      pathLength: 0,
      fill: colorVisibleFill ? colorVisibleFill : '#A2A1A6',

      stroke: colorVisibleStroke ? colorVisibleStroke : '#1E1E1F',
    },
    hidden: {
      fill: colorHiddenFill ? colorHiddenFill : '#1E1E1F',
      stroke: colorHiddenStroke ? colorHiddenStroke : '#1E1E1F',
      pathLength: 1,
    },
  }
  const [path, setPath] = useState('')
  const [viewBox, setViewBox] = useState<null | string | number>(null)

  useEffect(() => {
    switch (version) {
      case 'birds':
        setPath(svgPathBirds)
        setViewBox('0 0 130 130')
        return
      case 'sumo':
        setPath(svgPathSumo)
        setViewBox('0 0 698.4375 806.25')
        return
      case 'sumo2':
        setPath(svgPathSumo2)
        setViewBox('0 20 548 432')

        return
      case 'angryMan':
        setPath(svgPathAngryMan)
        setViewBox('0 71 528 272')
        return
      case 'woman':
        setPath(svgPathWoman)
        setViewBox('0 0 276 330.4277')
        return
      case 'handstand':
        setPath(svgPathHandstand)
        setViewBox('0 0 1845.9375 2584.6875')
        return
      case 'wrestlers':
        setPath(svgPathWrestlers)
        setViewBox('20 1930 1300 500')
        return
      default:
        setPath(svgPathBirds)
        setViewBox('0 0 130 130')
        return
    }
  }, [version])
  return (
    <>
      <HeaderSvgContainer>
        <HeaderSvgItem
          xmlns='http://www.w3.org/2000/svg'
          viewBox={viewBox}
          as={motion.svg}
        >
          <motion.path
            d={path}
            variants={icon}
            initial='hidden'
            animate='visible'
            transition={{
              default: { duration: 5, ease: 'easeInOut' },
              fill: { duration: 4, ease: [1.5, 0, 0.8, 1.7] },
              stroke: { duration: 6, ease: 'easeInOut' },
            }}
          />
        </HeaderSvgItem>
      </HeaderSvgContainer>
    </>
  )
}

export default HeaderSvg
