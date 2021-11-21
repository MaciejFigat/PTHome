import React from 'react'
import { useAppDispatch } from '../app/reduxHooks'
import { createArticle } from '../features/articles/articleSlice'
interface CreateArticleProps {}

const CreateArticle: React.FC<CreateArticleProps> = () => {
  const dispatch: any = useAppDispatch()

  const newArticleInfo = {
    topline: 'Test 2',
    headline:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, mollitia?',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis non deleniti doloremque, iure laudantium quaerat esse odit. Similique nihil voluptate voluptatem sed tempora sunt libero, saepe corrupti laboriosam suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ',

    imgLink: 'https://source.unsplash.com/-fkLJ9Ws5XQ',
    author: 'mr Bob',
  }

  const submitHandler = (e: any) => {
    e.preventDefault()

    dispatch(createArticle(newArticleInfo))
  }

  return (
    <div>
      <button onClick={submitHandler}>TEST CREATE ARTICLE</button>
    </div>
  )
}
export default CreateArticle
