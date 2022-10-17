import React, { useContext } from 'react'
import { qcContext } from '../../qcContext'
import * as d3 from 'd3'
import Bar from './components/Bar'
export default function Variable() {
  const { qc } = useContext(qcContext)
  let barData = []
  if (qc.operations) {
    let data = qc.getVarState(0)
    for (let key in data) {
      barData.push({
        name: key,
        bar: data[key],
      })
    }
  }
  // console.log(barData, 'variable')
  return (
    <div
      className="variableBar"
      style={{ width: '100%', height: '100%', marginLeft: '30px' }}
    >
      <svg style={{ width: '80%', height: '80%' }}>
        {barData.map((barChartData, index) => (
          <Bar key={index} index={index} barChartData={barChartData}></Bar>
        ))}
      </svg>
    </div>
  )
}
