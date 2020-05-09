import React from "react"
import ReactSVG from "react-svg"
import wav from '../images/wav.svg'

export default function CompiledSvg(props) {
  const { className } = props;
  return (
    <>
      <ReactSVG className={`${className} yellow`} src={wav} />
      <ReactSVG className={`${className} pink`} src={wav} />
      <ReactSVG className={`${className} blue`} src={wav} />
    </>
  )
}
