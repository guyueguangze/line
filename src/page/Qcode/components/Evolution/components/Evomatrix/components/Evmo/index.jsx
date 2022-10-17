import React, { useEffect, useRef } from 'react'
import { Popover } from 'antd'
export default function Evom(props) {
  let circuitR = 0
  let colorData = '#fff'
  if (props.eData) {
    // data = props.eData
    props.eData.used === true
      ? (colorData = 'rgb(246, 175, 31)')
      : (colorData = 'rgb(198, 193, 183)')
    circuitR = 5 * props.eData.ratio
  }
  const content = (
    <div>
      <p>{`ratio:${props.eData.ratio}`}</p>
      <p>{`max:${props.eData.max}`}</p>
    </div>
  )
  // console.log(props.eData, 'evom')
  return (
    <Popover content={content}>
      <g transform={`translate(${props.index * 26},0)`}>
        <rect
          width={26}
          height="26"
          fill="transparent"
          strokeWidth="1"
          stroke="rgba(142, 132, 112,0.5)"
        ></rect>
        <circle
          cx={13}
          cy={13}
          r="11"
          fill="transparent"
          stroke={colorData}
          strokeWidth={1}
        ></circle>
        <g transform={`translate(${13 - 2 * circuitR},${13 - 2 * circuitR})`}>
          <circle
            // transform="rotate(-90,13,13)"
            // 5
            r={circuitR}
            // 10
            cx={2 * circuitR}
            cy={2 * circuitR}
            fill="transparent"
            stroke={colorData}
            strokeWidth={2 * circuitR}
            strokeDasharray={2 * circuitR * 3.1415926}
            strokeDashoffset={
              ((2 * circuitR * 3.1415926) / 360) * (360 - props.eData.phase)
            }
          ></circle>
        </g>
      </g>
    </Popover>
  )
}
// props.eData.phase
