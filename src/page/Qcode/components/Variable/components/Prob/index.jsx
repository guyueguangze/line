import React from 'react'

export default function Prob(props) {
  console.log(props, 'prob')
  return (
    <g>
      {props.probData.map((item, index) => (
        <g transform={`translate(${40 * index},100)`} key={index}>
          <rect fill="rgb(198, 193, 183)" width={30} height={item * 200}></rect>
        </g>
      ))}
    </g>
  )
}
