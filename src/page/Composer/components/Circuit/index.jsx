import React, { useRef } from 'react'
import Qubit from '../Qubit'
import * as d3 from 'd3'

export default function Circuit(props) {
  const svg = useRef()
  d3.select(svg.current).on('mouseup', function (e) {
    const row = Math.ceil((e.layerX - 50) / 40 - 2)
    const column = Math.ceil((e.layerY - 28) / 40 - 3)
    //  console.log(row, column)
    console.log(e.layerY, e.layerX, 'y', 'x')
    props.getDragCoordinate(row, column)
  })
  for (let i = 0; i < props.circuitData.length; i++) {
    for (let j = 0; j < props.circuitData[1].length; j++) {
      if (props.circuitData[i][j]) {
        const operation = props.circuitData[i][j]
        // operation.x = this.operationX(j)
        operation.line = i
        operation.col = j
      }
    }
  }
  // console.log( props.circuitData, 888)
  // console.log(qc.circuit.gates, 777)
  let aaa = props.circuitData.flat()
  let bbb = aaa.filter((item) => item !== null)
  const findDuplicates = (aaa) => {
    const output = []
    Object.values(
      aaa.reduce((res, obj) => {
        let key = obj.id
        res[key] = [...(res[key] || []), { ...obj }]
        return res
      }, {})
    ).forEach((arr) => {
      if (arr.length > 1) {
        output.push(...arr)
      }
    })
    return output
  }
  const ccc = findDuplicates(bbb)
  ccc.forEach((item) => {
    props.circuitData[item.line][item.col].isManyQubit = true
  })
  const arrayTwo = Object.values(
    ccc.reduce((res, item) => {
      res[item.id] ? res[item.id].push(item) : (res[item.id] = [item])
      return res
    }, {})
  )
  // console.log(arrayTwo, 888)
  let connectorMaxgate = []
  arrayTwo.forEach((item) => {
    let max = item[0]
    for (var i = 1; i < item.length; i++) {
      let cur = item[i]
      // cur > max ? (max = cur) : null
      if (cur.connector > max.connector) {
        max = cur
      }
    }
    connectorMaxgate.push(max)
    // console.log(max, 9999)
  })
  // console.log(connectorMaxgate, 999)

  connectorMaxgate.forEach((item) => {
    // console.log(item.col,item.line);
    props.circuitData[item.line][item.col].isConnector = true
  })
  // console.log( props.circuitData,'成功了吗');
  // // console.log(arrayTwo,888)
  // console.log(ccc, 66)
  let gateLine = []
  var map = {}
  // var gateLine = []
  for (var i = 0; i < ccc.length; i++) {
    var ai = ccc[i]
    if (!map[ai.id]) {
      gateLine.push({
        id: ai.id,
        col: ai.col,
        name: ai.name,
        options: ai.options,
        x: ai.x,
        lineArr: [{ line: ai.line }],
      })
      map[ai.id] = ai.id
    } else {
      for (var j = 0; j < gateLine.length; j++) {
        var dj = gateLine[j]
        if (dj.id == ai.id) {
          dj.lineArr.push({ line: ai.line })
          break
        }
      }
    }
  }
  return (
    <div>
      <svg ref={svg} height="200" width={'100%'}>
        <rect
          strokeWidth={1}
          stroke="#C4C4C4"
          width={'100%'}
          height={'100%'}
          fill="transparent"
        ></rect>
        {props.circuitData.map((qubit, index) => (
          <g
            key={index}
            transform={`translate(60,${20 + index * 40 ? index * 40 : 0})`}
          >
            <line
              className="qubit"
              strokeWidth="2"
              x1="30"
              y1="40"
              x2="100%"
              y2="40"
              data-dis="0"
              stroke="#C4C4C4"
            ></line>
          </g>
        ))}
        {gateLine.map((item, index) => (
          <g key={index}>
            <line
              x1={16 + 40 * item.col + 95}
              y1={item.lineArr[0].line * 40 + 40}
              x2={16 + 40 * item.col + 95}
              y2={item.lineArr[item.lineArr.length - 1].line * 40 + 40}
              strokeWidth="1.25"
              stroke=" rgb(0, 45, 156)"
            ></line>
          </g>
        ))}
        {props.circuitData.map((qubit, index) => (
          <Qubit
            circuitLength={props.circuitLength}
            key={index}
            index={index}
            gates={qubit}
          ></Qubit>
        ))}
      </svg>
    </div>
  )
}
