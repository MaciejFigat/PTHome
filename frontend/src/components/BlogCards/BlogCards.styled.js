import styled from 'styled-components'

export const BlogCard = styled.div`
  width: 400px;
  height: 600px;
  background-color: var(--secondary2);
  color: var(--background5-main);
`
export const BlogCardWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  place-items: center;
  justify-content: center;
`
export const BlogCardImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  align-self: center;
  max-height: 200px;
`
