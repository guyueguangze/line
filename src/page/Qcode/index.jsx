import React, { useState } from 'react'
import Editor from './components/Editor'
import Circuit from './components/Circuit'
import Evolution from './components/Evolution'
import Variable from './components/Variable'
import styles from './index.module.scss'
import Title from './Title'
import { Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'

import { qcContext } from './qcContext'

export default function Qcode() {
  const [qc, setQc] = useState({})
  // qc.getOutputState()
  // console.log(storeD,55)

  return (
    <div className={styles.root}>
      <div className="left">
        <qcContext.Provider value={{ qc, setQc }}>
          <Editor></Editor>
        </qcContext.Provider>
      </div>
      <div className="right">
        <div className="circuit">
          <qcContext.Provider value={{ qc, setQc }}>
            <Circuit></Circuit>
          </qcContext.Provider>
        </div>
        <div className="down-right">
          <div className="evolution">
            <Title></Title>
            <qcContext.Provider value={{ qc, setQc }}>
              <Evolution></Evolution>
            </qcContext.Provider>
          </div>
          <div className="variable">
            <div className="title">
              <span style={{ marginLeft: 5 }}>Variable State</span>
              <span style={{ marginLeft: 5 }}>
                <Tooltip
                  placement="right"
                  title={
                    'Here is the panel to inspect the intermediate variable state.'
                  }
                >
                  <InfoCircleOutlined></InfoCircleOutlined>
                </Tooltip>
              </span>
            </div>
            <qcContext.Provider value={{ qc, setQc }}>
              <Variable></Variable>
            </qcContext.Provider>
          </div>
        </div>
      </div>
    </div>
  )
}
