import styled, { keyframes } from 'styled-components'
import { handleBubbleColor } from './utilsBubble'
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
 25% {  transform: rotate(10deg) translateX(15%) translateY(-55%); max-height: 200px;}
 37% {  transform: rotate(15deg) translateX(-45%) translateY(-75%);max-height: 160px;}
 50% {  transform: rotate(0deg) translateX(-30%) translateY(50%); max-height: 140px;}
 75% {  transform: rotate(20deg) translateX(-25%) translateY(70%);max-height: 200px;}
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

export const BubbleOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
export const BubbleWrapper = styled.div`
  height: 95vh;
  @media (max-width: 844px) and (orientation: landscape) {
    height: 200vh;
  }
  position: relative;
  display: block;
  width: 100%;

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
    width: 96.5vw;
  }
`
export const BubbleMain = styled.div`
  position: absolute;
`
export const BubbleOne = styled(BubbleMain)`
  height: 10rem;
  width: 10rem;
  opacity: 0.69;
  background: radial-gradient(
    ellipse at top,
    var(--bluegreen1),
    var(--bluegreen11)
  );
  top: calc(50% - 6rem);
  right: calc(50% - 6rem);
  animation: ${blob} 10s ease-in-out infinite, ${float} 67s ease-in-out infinite;
  @media (max-width: 880px) {
    animation: ${blob} 10s ease-in-out infinite,
      ${floatThree} 67s ease-in-out infinite;
  }
`
export const BubbleOneBlurry = styled(BubbleOne)`
  display: grid;
  z-index: -1;
  place-items: center;
  /* position: relative; */
  height: ${(props) => (props.width ? props.width : `11rem`)};
  width: ${(props) => (props.width ? props.width : `11rem`)};
  opacity: ${(props) => (props.opacity ? props.opacity : `0.29`)};

  /* background */
  ${(props) => handleBubbleColor(props).bubbleBackground}
  /* box-shadow */
  ${(props) => handleBubbleColor(props).bubbleShadow}
  top: ${(props) => (props.top ? props.top : `calc(20% - 6rem)`)};
  right: ${(props) => (props.right ? props.right : `calc(60% - 6rem)`)};

  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : `none`};

  animation: ${blob}
      ${(props) =>
        props.animationFloatDuration ? props.animationFloatDuration : `10s`}
      ease-in-out infinite,
    ${floatThree}
      ${(props) => (props.animationDuration ? props.animationDuration : `67s`)}
      ease-in-out infinite;
  /* ${floatThree} 67s ease-in-out infinite; */
`

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
  /* z-index: 1; */
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
  background-image: linear-gradient(
    90deg,
    var(--bluegreen4),
    var(--bluegreen7)
  );
  top: calc(11% - 2rem);
  right: calc(33% - 2rem);
  animation: ${blob} 15s ease-in-out infinite,
    ${floatFive} 75s ease-in-out infinite;
  @media (max-width: 880px) {
    top: calc(22% - 2rem);
    right: calc(33% - 2rem);
  }
  opacity: 0.34;
  transition: all 2s ease-out;

  &:after {
    transition: all 1.3s;
    content: "I'm a blob";
    color: black;
    opacity: 0;
    font-size: 18px;
    display: block;
    position: absolute;

    top: 20%;
    left: 25%;
    width: 40%;
  }
`

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  position: absolute;
  max-width: 110%;
  min-width: 133px;
  max-height: 340px;
  object-fit: cover;
  object-position: center;
  top: 20%;
  right: 10%;
  @media (max-width: 880px) {
    top: 70%;
    right: -10%;
  }
`
export const ImgSmall = styled.img`
  padding-right: 0;
  border: 0;
  position: absolute;
  max-height: 110px;
  object-fit: cover;
  object-position: center;
  top: 60%;
  right: 10%;
  @media (max-width: 880px) {
    top: 50%;
    right: 10%;
  }
`
export const ImgSmallTwo = styled(ImgSmall)`
  max-height: 240px;
  top: 20%;
  right: 30%;
  @media (max-width: 880px) {
    top: 10%;
    right: 20%;
  }
`
export const FloatingWrapper = styled.div`
  animation: ${floatFour} 75s ease-in-out infinite;
  @media (max-width: 880px) {
    animation: ${floatThree} 75s ease-in-out infinite;
  }
  position: relative;
  opacity: 0.27;
  &:hover {
    &:after {
      opacity: 0.9;
    }
  }
  &:after {
    transition: all 1.3s;
    content: '${(props) =>
      props.content ? props.content : 'Recommended by Joe R.'}';
    color: black;
    opacity: 0;
    font-size: 18px;
    position: absolute;
    left: 45%;
    width: 40%;
    min-width: fit-content;
    @media (min-width: 880px) and (max-width: 1020px) {
      top: 10%;
      left: 39%;
    }
    @media (max-width: 880px) {
      top: 210%;
      left: 79%;
    }
  }
`
export const WrapperImgPosition = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const FloatingWrapperCustom = styled.div`
  position: relative;
  opacity: 0.27;
  top: ${(props) => (props.top ? props.top : '20%')};
  left: ${(props) => props.left};
  max-width: 200px;
  max-height: fit-content;
  animation: ${(props) => (props.floatOne ? float : floatFour)} 75s ease-in-out
    infinite;
  @media (max-width: 880px) {
    animation: ${(props) => (props.floatOne ? float : floatThree)} 75s
      ease-in-out;
  }
  &:after {
    transition: all 1.3s;
    content: '${(props) =>
      props.content ? props.content : 'Recommended by Joe R.'}';
    color: black;
    opacity: 0;
    font-size: 18px;
    top: -5px;
    left: 25px;
    @media (min-width: 880px) and (max-width: 1020px) {
      left: -10px;
    }
    @media (max-width: 880px) {
      left: -15px;
    }
  }
  &:hover {
    &:after {
      opacity: 0.9;
    }
  }
`
