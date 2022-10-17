import React from 'react'
import CircuitGate from '../CircuitGate'
export default function Qubit(props) {
  return (
    <g>
      <g
        transform={`translate(60,${
          20 + props.index * 40 ? props.index * 40 : 0
        })`}
        width={200}
        height={200}
      >
        <g transform="translate(-14,4)">
          <text
            x="38.4"
            y="36"
            dy=".3em"
            fill="rgb(111, 111, 111)"
            fontWeight="400"
            textAnchor="end"
            fontSize="14px"
          >
            <tspan>q[{props.index}]</tspan>
          </text>
        </g>
      </g>
      {props.gates.map((gate, index) => (
        <CircuitGate
          index={index}
          x={95}
          y={25 + props.index * 40}
          key={index}
          gate={gate}
        ></CircuitGate>
      ))}
    </g>
  )
}
