import styled from 'styled-components'

export const ParticleWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  mask-image: radial-gradient(
    white 0%,
    white 30%,
    transparent 80%,
    transparent
  );
`
export const ParticleContainer = styled.div`
  position: absolute;
  transform: translateY(-10vh);
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

export const Particle = styled.div``
