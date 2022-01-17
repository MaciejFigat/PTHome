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

const floatFive = keyframes`   
 0% {  transform: rotate(0deg) translateX(0%) translateY(0%); }
 25% {  transform: rotate(10deg) translateX(15%) translateY(-35%);  height: 11rem;
  width: 10rem; opacity: 0.09;}
 37% {  transform: rotate(15deg) translateX(-25%) translateY(-35%);  height: 15rem;
  width: 14rem; opacity: 0.19;}
 50% {  transform: rotate(0deg) translateX(-30%) translateY(30%); height: 14rem;
  width: 13rem; opacity: 0.29;}
 75% {  transform: rotate(20deg) translateX(-25%) translateY(30%);  height: 16rem;
  width: 15rem; opacity: 0.39;}
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
    13% {  transform: rotate(15deg) translateX(-25%) translateY(35%); max-height: 310px; opacity: 0.49;}
    25% {  transform: rotate(30deg) translateX(-35%) translateY(25%); max-height: 280px; opacity: 0.36;}
    37% {  transform: rotate(45deg) translateX(-43%) translateY(-25%);  max-height: 260px; opacity: 0.27;}
    50% {  transform: rotate(30deg) translateX(35%) translateY(-30%);  max-height: 220px; opacity: 0.28;}
    67% {  transform: rotate(15deg) translateX(70%) translateY(-23%);  max-height: 240px; opacity: 0.28;}
    75% {  transform: rotate(-5deg) translateX(80%) translateY(25%); max-height: 270px; opacity: 0.18;}
    87% {  transform: rotate(-22deg) translateX(30%) translateY(45%); max-height: 320px; opacity: 0.28;}
    100% {  transform: rotate(0deg) translateX(0%) translateY(0%); }`

export const OverflowWrapper = styled.div`
  /* display: grid;
  place-items: center; */
`
export const BubbleWrapper = styled.div`
  height: 95vh;
  @media (max-width: 700px) and (orientation: landscape) {
    height: 200vh;
  }
  min-height: fit-content;
  position: relative;
  display: block;
  width: 100%;
  z-index: 0;

  /* @media (max-width: 700px) and (orientation: landscape) {
    height: 200vh;
  } */
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
  /* overflow: auto; */
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
  /* opacity: 0.34; */
  z-index: -11;
  background-image: linear-gradient(
    90deg,
    var(--bluegreen4),
    var(--bluegreen7)
  );
  top: calc(11% - 2rem);
  right: calc(33% - 2rem);

  /* opacity: ${({ vanish }) => (vanish === true ? '0' : '0.34')}; */
  animation: ${blob} 15s ease-in-out infinite,
    ${floatFive} 76s ease-in-out infinite;
  ${({ vanish }) =>
    vanish === true
      ? `opacity: 0.0; 3s linear 1s infinite running slidein;`
      : `opacity: 0.34;`}
  transition: all 2s ease-out;
`
export const FlotingWrapper = styled.div`
  animation: ${floatFour} 75s ease-in-out infinite;
  @media (max-width: 680px) {
    animation: ${floatThree} 75s ease-in-out infinite;
  }
  /* min-height: 10rem; */
  /* min-width: 10rem; */
  opacity: 0.27;
  &:after {
    transition: all 1.3s;
    content: 'Oxytocine';
    color: black;
    opacity: 0;
    font-size: 18px;
    display: block;
    position: absolute;
    border: none;
    bottom: 0;
    left: 50%;
    width: 40%;
    /* height: 335px; */
  }
  &:hover {
    &:after {
      /* transition: all 1.3s; */
      opacity: 0.9;
    }
  }
`
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  position: absolute;
  max-width: 110%;
  /* width: 40vw; */

  max-height: 340px;
  z-index: -999;

  object-fit: cover;

  object-position: center;
  top: 20%;
  right: 10%;
  /* overflow: visible; */
`
