import React from 'react'
import OutputRect from './components/OutputRect'
import InputRect from '../Input/components/InputRect'
export default function Output(props) {
    // console.log(props, 'output')
    let bases = []
    if (props.outputData){
      bases = props.outputData.bases
    }
      return (
        // <g></g>
        <g transform={`translate(${bases.length * 26 + 10},90)`}>
          {/* <rect width={32} height={32} fill="green"></rect> */}
          {bases.map((basesData, index) => (
            <OutputRect
              basesData={basesData}
              key={index}
              index={index}
            ></OutputRect>
          ))}
        </g>
      )
}
