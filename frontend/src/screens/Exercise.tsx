import React from 'react'
import Cards from '../components/Cards/Cards'
import arm from '../data/assets/arm.svg'
import handstand from '../data/assets/handstand.svg'
import proWrestlers from '../data/assets/proWrestlers.svg'
import sumo from '../data/assets/sumo.svg'
import sumo2 from '../data/assets/sumo2.svg'
import angryMan from '../data/assets/angryMan.svg'
import Scroll2 from '../components/ScrollSection/Scroll2'
import { CardImage } from '../components/Cards/Cards.styled'

interface ExerciseProps {}

const data = [
  {
    title: 'Testy sprawnościowe',
    img: angryMan,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, incidunt?',
  },
  {
    title: 'Treningi indywidualne',
    img: arm,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, incidunt?',
  },
  {
    title: 'Treningi grupowe',
    img: sumo2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, incidunt?',
  },
  {
    title: 'Plany treningowe',
    img: proWrestlers,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, incidunt?',
  },
  {
    title: 'Zwiększanie mobilności',
    img: sumo,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, incidunt?',
  },
  {
    title: 'Treningi performance',
    img: handstand,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, incidunt?',
  },
]

const Exercise: React.FC<ExerciseProps> = () => {
  return (
    <>
      {' '}
      <Scroll2
        narrowSection={
          <>
            <p>
              <CardImage src={arm} />
            </p>
            <p>
              <CardImage src={sumo} />
            </p>
            <p>
              <CardImage src={angryMan} />
            </p>
            <p>
              <CardImage src={sumo2} />
            </p>
            <p>
              <CardImage src={handstand} />
            </p>
            <p>
              <CardImage src={proWrestlers} />
            </p>
          </>
        }
        wideSection={<Cards data={data} />}
      />
    </>
  )
}
export default Exercise
