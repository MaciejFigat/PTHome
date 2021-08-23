import React from 'react'
import SectionCardsv2 from '../components/SectionCardsv2'
import SmallSection from '../components/SmallSection'

const cardDataOne = [
  {
    id: 1,
    title: 'Blog Card',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit tenetur nisi distinctio voluptatum iusto quas at, alias molestias voluptatem!',
  },
  {
    id: 2,
    title: '2nd title',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit tenetur nisi distinctio voluptatum iusto quas at, alias molestias voluptatem!',
  },
  {
    id: 3,
    title: '3rd title',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit tenetur nisi distinctio voluptatum iusto quas at, alias molestias voluptatem!',
  },
]
interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <>
      <SmallSection
        title='!st section'
        description="hey I'm a small section!"
      />
      <SectionCardsv2 cardData={cardDataOne} />
    </>
  )
}
export default Blog
