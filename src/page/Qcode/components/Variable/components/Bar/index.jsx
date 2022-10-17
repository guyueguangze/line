import React from 'react'
import Magn from '../Magn'
import Prob from '../Prob'
export default function Bar(props) {
  console.log(props, 'bar')
  return (
    <g transform={`translate(${100 * props.index})`}>
      <Magn magnData={props.barChartData.bar.magn}></Magn>
      <Prob probData={props.barChartData.bar.prob}></Prob>
    </g>
  )
}
