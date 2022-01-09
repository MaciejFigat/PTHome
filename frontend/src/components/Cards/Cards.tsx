import React from 'react'
import {
  CardBody,
  CardsWrapper,
  Wrapper,
  CardH2,
  CardImage,
} from './Cards.styled'
import arm from '../../data/assets/arm.svg'
import handstand from '../../data/assets/handstand.svg'
import proWrestlers from '../../data/assets/proWrestlers.svg'
import sumo from '../../data/assets/sumo.svg'
import sumo2 from '../../data/assets/sumo2.svg'
import woman from '../../data/assets/woman.svg'

interface CardsProps {}

const Cards: React.FC<CardsProps> = () => {
  return (
    <Wrapper>
      <CardsWrapper>
        <CardBody>
          <CardImage src={sumo} />
          <CardH2>Testy sprawnościowe</CardH2>
        </CardBody>
        <CardBody>
          <CardImage src={arm} />
          <CardH2>Treningi indywidualne</CardH2>
        </CardBody>
        <CardBody>
          <CardImage src={sumo2} />
          <CardH2>Treningi grupowe</CardH2>
        </CardBody>
        <CardBody>
          <CardImage src={proWrestlers} />
          <CardH2>Plany treningowe</CardH2>
        </CardBody>
        <CardBody>
          <CardImage src={sumo} />
          <CardH2>Zwiększanie mobilności</CardH2>
        </CardBody>
        <CardBody>
          <CardImage src={handstand} />
          <CardH2>Treningi performance</CardH2>
        </CardBody>
      </CardsWrapper>
    </Wrapper>
  )
}
export default Cards
