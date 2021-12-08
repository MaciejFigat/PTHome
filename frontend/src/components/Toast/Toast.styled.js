import styled from 'styled-components'

const handlePosition = ({ position }) => {
  if (position === 'show') {
    return `top: 200px;
    right: 100px;
    @media (max-width: 1010px) {
      top: 50px;
      right: 0px;
    }`
  } else if (position === 'hide') {
    return `top: 300px;
    right: 100px;
    @media (max-width: 1010px) {
      top: 50px;
      right: 0px;
    }`
  }
}

export const ToastContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: 0.7s;
  ${(props) => handlePosition(props)}
`
export const ToastBody = styled.div`
  position: relative;
  right: 0px;
  color: rgb(15, 13, 10);
  border-radius: 5px;
  padding: 1rem 1rem;
  min-width: fit-content;
  z-index: 12;
  transition: ease-out 0.7s;
  background-color: rgb(57, 214, 84);
`
