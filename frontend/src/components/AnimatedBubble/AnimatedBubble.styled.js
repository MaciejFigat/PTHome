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
const floatTwo = keyframes`   
 0% {  transform: rotate(0deg) translateX(0%) translateY(0%); }
 25% {  transform: rotate(10deg) translateX(15%) translateY(-35%);}
 37% {  transform: rotate(15deg) translateX(-25%) translateY(-35%);}
 50% {  transform: rotate(0deg) translateX(-30%) translateY(30%);}
 75% {  transform: rotate(20deg) translateX(-25%) translateY(30%);}
 100% {  transform: rotate(0deg) translateX(0%) translateY(0%); }`
const floatThree = keyframes`   
 0% {  transform: rotate(0deg) translateX(0%) translateY(0%); }
 25% {  transform: rotate(10deg) translateX(15%) translateY(-35%); max-height: 200px;}}
 37% {  transform: rotate(15deg) translateX(-25%) translateY(-35%);max-height: 160px;}}
 50% {  transform: rotate(0deg) translateX(-30%) translateY(30%); max-height: 140px;}}
 75% {  transform: rotate(20deg) translateX(-25%) translateY(30%);max-height: 200px;}}
 100% {  transform: rotate(0deg) translateX(0%) translateY(0%); }`

const floatFour = keyframes`   
    0% {  transform: rotate(0deg) translateX(0%) translateY(0%); }
    13% {  transform: rotate(15deg) translateX(-25%) translateY(35%); max-height: 310px;}
    25% {  transform: rotate(30deg) translateX(-35%) translateY(25%); max-height: 300px;}
    37% {  transform: rotate(45deg) translateX(-43%) translateY(-25%);  max-height: 260px;}
    50% {  transform: rotate(30deg) translateX(35%) translateY(-30%);  max-height: 220px;}
    67% {  transform: rotate(15deg) translateX(70%) translateY(-23%);  max-height: 240px;}
    75% {  transform: rotate(-5deg) translateX(80%) translateY(25%); max-height: 270px;}
    87% {  transform: rotate(-22deg) translateX(30%) translateY(45%); max-height: 320px;}
    100% {  transform: rotate(0deg) translateX(0%) translateY(0%); }`

export const BubbleWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 95vh;
  z-index: 0;
  @media (max-width: 700px) and (orientation: landscape) {
    height: 200vh;
  }
  @media (min-width: 620px) and (max-width: 880px) {
    overflow-x: hidden;
    width: 98vw;
  }
  @media (max-width: 620px) {
    overflow-x: hidden;
    min-width: 100%;
    width: 98vw;
  }
  @media (max-width: 366px) {
    width: 96vw;
  }
`
export const BubbleMain = styled.div`
  position: absolute;
  /* z-index: -222; */
  /* transition: background-image 0.5s ease; */
`
export const BubbleOne = styled(BubbleMain)`
  height: 10rem;
  width: 10rem;
  opacity: 0.49;
  background: radial-gradient(
    ellipse at top,
    var(--bluegreen1),
    var(--bluegreen11)
  );
  top: calc(50% - 6rem);
  right: calc(50% - 6rem);
  animation: ${blob} 10s ease-in-out infinite, ${float} 67s ease-in-out infinite;
`
// closest-side, - for radiant gradient
// background: radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%);
// background: radial-gradient(ellipse at top, #e66465, transparent),
//             radial-gradient(ellipse at bottom, #4d9f0c, transparent);
export const BubbleTwo = styled(BubbleMain)`
  height: 8rem;
  width: 4rem;
  opacity: 0.38;
  background-image: linear-gradient(
    120deg,
    var(--bluegreen1),
    var(--bluegreen2)
  );
  top: 15%;
  right: -10%;
  border-radius: 65% 40% 35% 50% / 65% 38% 75% 36%;
  animation: ${blob} 8s ease-in-out infinite, ${float} 115s ease-in-out infinite;
`

export const BubbleThree = styled(BubbleMain)`
  height: 6rem;
  width: 6rem;
  opacity: 0.4;
  background-image: linear-gradient(
    90deg,
    var(--bluegreen1),
    var(--bluegreen11)
  );
  top: 60%;
  right: 70%;
  animation: ${blob} 5s ease-in-out infinite, ${float} 95s ease-in-out infinite;
`
export const BubbleFour = styled(BubbleMain)`
  height: 6rem;
  width: 6rem;
  opacity: 0.54;
  background-image: linear-gradient(
    90deg,
    var(--bluegreen2),
    var(--bluegreen9)
  );
  top: 20%;
  right: -40%;
  animation: ${blob} 5s ease-in-out infinite, ${float} 95s ease-in-out infinite;
`
export const BubbleFive = styled(BubbleMain)`
  height: 17rem;
  width: 16rem;
  opacity: 0.14;
  z-index: -11;
  background-image: linear-gradient(
    90deg,
    var(--bluegreen4),
    var(--bluegreen7)
  );
  top: calc(21% - 2rem);
  right: calc(33% - 2rem);
  transition: all 1s;
  &:hover {
    opacity: 0.44;
    width: 16.5rem;
    height: 17.5rem;
  }
  animation: ${blob} 15s ease-in-out infinite,
    ${floatTwo} 125s ease-in-out infinite;
`
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  position: absolute;
  max-width: 110%;
  /* width: 40vw; */

  max-height: 340px;
  z-index: -999;
  opacity: 0.2;
  /* aspect-ratio: 16 / 9; */
  object-fit: cover;

  object-position: center;
  top: 20%;
  right: 10%;
  /* overflow: visible; */
  animation: ${floatFour} 75s ease-in-out infinite;
  @media (max-width: 680px) {
    animation: ${floatThree} 75s ease-in-out infinite;
  }
  &:after {
    content: 'Oxytocine';
    display: block;
    position: relative;
    border: 20px solid white;
    bottom: 24px;
    left: 0;
    width: 100%;
    height: 335px;
  }
`
