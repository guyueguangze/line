import React from 'react'

export default function Magn(props) {
  console.log(props, 'magn')
  return (
    <g>
      {props.magnData.map((item, index) => (
        <g transform={`translate(${40 * index})`} key={index}>
          <rect fill="rgb(80, 128, 132)" width={30} height={item * 200}></rect>
        </g>
      ))}
    </g>
  )
}
