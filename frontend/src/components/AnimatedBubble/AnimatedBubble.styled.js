import styled, { keyframes } from 'styled-components'

// Create the keyframes
const blob = keyframes`

    0% { 
      border-radius: 65% 60% 35% 50% / 65% 38% 75% 36%; 
    } 
    25% { 
      border-radius: 89% 54% 62% 42% / 83% 45% 75% 63%; 
    } 
    50% { 
      border-radius: 65% 60% 35% 50% / 65% 38% 75% 36%;   } 
      25% { 
      border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; 
    } 
    50% { 
      border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;   } 
    75% { 
      border-radius: 89% 54% 62% 42% / 83% 45% 75% 63%; 
    } 
    100% { 
      border-radius: 65% 60% 35% 50% / 65% 38% 75% 36%;   } 
  `

const float = keyframes`    
0% {  transform: rotate(0deg) translateX(0%) translateY(0%); }
    25% {  transform: rotate(10deg) translateX(35%) translateY(-100%);}
    50% {  transform: rotate(0deg) translateX(-35%) translateY(100%);}
    100% {  transform: rotate(0deg) translateX(0%) translateY(0%); }`

export const BubbleWrapper = styled.div`
  position: relative;
  /* margin: auto; */
  display: block;
  /* margin-top: 5%; */
  /* min-width: 400px; */
  width: 100%;
  /* max-width: 40vw; */
  height: 100vh;
  /* max-height: 70vh; */
  z-index: 0;
  @media (max-width: 620px) {
    overflow: hidden;
    width: 98vw;
  }
`
export const BubbleMain = styled.div`
  position: absolute;
  z-index: 100;
  z-index: -222;
`
export const BubbleOne = styled(BubbleMain)`
  height: 10rem;
  width: 10rem;
  background: #774898;
  top: calc(50% - 5rem);
  right: calc(50% - 5rem);
  animation: ${blob} 10s ease-in-out infinite, ${float} 67s ease-in-out infinite;
`
export const BubbleTwo = styled(BubbleMain)`
  height: 8rem;
  width: 4rem;
  background: #de4383;
  top: 15%;
  right: -10%;
  border-radius: 65% 40% 35% 50% / 65% 38% 75% 36%;
  animation: ${blob} 8s ease-in-out infinite, ${float} 115s ease-in-out infinite;
`

export const BubbleThree = styled(BubbleMain)`
  height: 6rem;
  width: 6rem;
  background: red;
  top: 80%;
  right: 70%;
  animation: ${blob} 5s ease-in-out infinite, ${float} 95s ease-in-out infinite;
`
