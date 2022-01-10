import React from 'react'
import Cards from '../components/Cards/Cards'
import SmallSection from '../components/SectionSmall/SmallSection'
import arm from '../data/assets/arm.svg'
import handstand from '../data/assets/handstand.svg'
import proWrestlers from '../data/assets/proWrestlers.svg'
import sumo from '../data/assets/sumo.svg'
import sumo2 from '../data/assets/sumo2.svg'
interface ExerciseProps {}

const data = [
  {
    title: 'Testy sprawnościowe',
    img: sumo,
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
      <SmallSection
        title='Oferuję następujące usługi'
        description='zapraszam serdecznie'
        variant='blue'
      />
      <Cards data={data} />
    </>
  )
}
export default Exercise
