import React, { useEffect, useState } from 'react'
import Input from '../Input'
import Output from '../Output'
import Evomatrix from '../Evomatrix'
import {
  MoreOutlined,
  ShrinkOutlined,
  CloseOutlined,
  SaveOutlined,
  SwitcherOutlined,
} from '@ant-design/icons'
export default function Topological(props) {
  const { inputData, outputData, getEvoMatrixData } = { ...props.topoData }
  let svgWidth = 50
  if (props.topoData) {
    svgWidth = inputData.bases.length * 35 + 100
  }
  const [ishow, setIshow] = useState('none')
  const onMouseDown = () => {
    setIshow('block')
  }
  return (
    <div className="Topological" style={{ with: '100%', textAlign: 'center' }}>
      <div onMouseDown={onMouseDown} className="icon">
        <MoreOutlined />
      </div>
      <div style={{ display: ishow }} className="overperation">
        <div>
          <SaveOutlined />
        </div>
        <div>
          <SwitcherOutlined />
        </div>

        <div>
          <ShrinkOutlined />
        </div>
        <div>
          <CloseOutlined />
        </div>
      </div>
      <svg width={svgWidth} height={svgWidth}>
        <Output outputData={outputData}></Output>

        <Input inputData={inputData}></Input>
        <Evomatrix getEvoMatrixData={getEvoMatrixData}></Evomatrix>
      </svg>
    </div>
  )
}
