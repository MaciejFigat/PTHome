import React, { useState, useEffect } from 'react'
import {
  HeaderContainer,
  HeaderTitle,
  HeaderList,
  HeaderItem,
} from './frontPageHeader.styled'
import ContactIcons from '../../SvgIcon/ContactIcons'
import HeaderSvg from './HeaderSvg'

interface FrontPageHeaderProps {
  title: string
}

const FrontPageHeader: React.FC<FrontPageHeaderProps> = ({ title }) => {
  const [version, setVersion] = useState<
    'woman' | 'sumo' | 'birds' | 'sumo2' | 'wrestlers' | 'handstand' | undefined
  >('woman')
  useEffect(() => {
    const timer = setTimeout(() => {
      setVersion('sumo')
    }, 3000)

    const timer2 = setTimeout(() => {
      setVersion('sumo2')
    }, 9000)

    const timer3 = setTimeout(() => {
      setVersion('handstand')
    }, 12000)

    return () => (
      clearTimeout(timer3), clearTimeout(timer2), clearTimeout(timer)
    )
  }, [])
  return (
    <HeaderContainer>
      <HeaderList>
        <HeaderItem>
          <HeaderSvg version={version} />{' '}
        </HeaderItem>
        <HeaderItem>
          <HeaderTitle>{title}</HeaderTitle>
        </HeaderItem>
        <HeaderItem>
          {' '}
          <ContactIcons />
        </HeaderItem>
      </HeaderList>
    </HeaderContainer>
  )
}
export default FrontPageHeader
