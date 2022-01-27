import React from 'react'
import {
  MeatballImg,
  MeatballImgHeader,
  MeatballImgThree,
  SvgMeatball,
} from './Meatballs.styled'
interface MeatballProps {
  width?: string
  height?: string
  img: any
  alt: string
  version?: 'primary' | 'secondary' | 'header'
}

const Meatball: React.FC<MeatballProps> = ({
  width,
  height,
  img,
  alt,
  version,
}) => {
  return (
    <>
      {version && version === 'header' && (
        <>
          <MeatballImgHeader
            src={img}
            alt={alt}
            width={width}
            height={height}
          />
          <SvgMeatball width='0' height='0'>
            <defs>
              <clipPath id='meatballHeader' clipPathUnits='objectBoundingBox'>
                <path d='M0.691139 0.399038C0.704329 0.365785 0.711579 0.329529 0.711579 0.291579C0.711579 0.130544 0.581035 0 0.42 0C0.258965 0 0.128421 0.130544 0.128421 0.291579C0.128421 0.332647 0.136911 0.371732 0.152232 0.407174C0.187006 0.49448 0.172393 0.532516 0.109391 0.573302C0.0437377 0.613929 0 0.686594 0 0.769474C0 0.89679 0.10321 1 0.230526 1C0.287477 1 0.339605 0.979348 0.379829 0.945125C0.441673 0.893312 0.461696 0.890638 0.527404 0.911288C0.547858 0.9183 0.5698 0.922105 0.592632 0.922105C0.70367 0.922105 0.793684 0.832091 0.793684 0.721053C0.793684 0.659964 0.766439 0.605238 0.723437 0.568364C0.670147 0.522063 0.656848 0.493036 0.691139 0.399038Z' />{' '}
              </clipPath>
            </defs>
          </SvgMeatball>
        </>
      )}
      {version && version === 'primary' && (
        <>
          <MeatballImg src={img} alt={alt} width={width} height={height} />
          <SvgMeatball width='0' height='0'>
            <defs>
              <clipPath id='meatballTwo' clipPathUnits='objectBoundingBox'>
                <path d='M0.691139 0.399038C0.704329 0.365785 0.711579 0.329529 0.711579 0.291579C0.711579 0.130544 0.581035 0 0.42 0C0.258965 0 0.128421 0.130544 0.128421 0.291579C0.128421 0.332647 0.136911 0.371732 0.152232 0.407174C0.187006 0.49448 0.172393 0.532516 0.109391 0.573302C0.0437377 0.613929 0 0.686594 0 0.769474C0 0.89679 0.10321 1 0.230526 1C0.287477 1 0.339605 0.979348 0.379829 0.945125C0.441673 0.893312 0.461696 0.890638 0.527404 0.911288C0.547858 0.9183 0.5698 0.922105 0.592632 0.922105C0.70367 0.922105 0.793684 0.832091 0.793684 0.721053C0.793684 0.659964 0.766439 0.605238 0.723437 0.568364C0.670147 0.522063 0.656848 0.493036 0.691139 0.399038Z' />{' '}
              </clipPath>
            </defs>
          </SvgMeatball>
        </>
      )}

      {version && version === 'secondary' && (
        <>
          <MeatballImgThree src={img} alt={alt} width={width} height={height} />
          <SvgMeatball width='0' height='0'>
            <defs>
              <clipPath id='meatballThree' clipPathUnits='objectBoundingBox'>
                <path d='M0.205479 0C0.277043 0 0.340063 0.0365844 0.376855 0.092071C0.444067 0.189784 0.514971 0.206347 0.620632 0.135363C0.65634 0.110481 0.699754 0.0958904 0.746575 0.0958904C0.868381 0.0958904 0.967123 0.194633 0.967123 0.316438C0.967123 0.425445 0.888041 0.515981 0.784119 0.533804C0.710088 0.548466 0.68036 0.588291 0.696108 0.678347C0.699559 0.69553 0.70137 0.713307 0.70137 0.731507C0.70137 0.879792 0.581161 1 0.432877 1C0.284592 1 0.164384 0.879792 0.164384 0.731507C0.164384 0.689677 0.173949 0.650081 0.191013 0.614787C0.244052 0.496908 0.212525 0.43617 0.12271 0.393608C0.0504471 0.361769 0 0.289515 0 0.205479C0 0.0919963 0.0919963 0 0.205479 0Z' />
              </clipPath>
            </defs>
          </SvgMeatball>
        </>
      )}
    </>
  )
}
export default Meatball
