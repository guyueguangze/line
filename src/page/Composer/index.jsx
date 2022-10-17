import React, { useState, useContext } from 'react'
import { Col, Row } from 'antd'
import GateMenu from './components/GateMenu'
import Circuit from './components/Circuit'
import Edit from './components/Edite'
import { gateTypeContext } from './Context'
import { nanoid } from 'nanoid'
import styles from './index.module.scss'
export default function Qcomposer() {
  let defaultCircuit = [
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  ]
  const [circuitData, setCircuit] = useState(defaultCircuit)
  const [geteType, setGeteType] = useState({})
  const [coordinate, setcoordinate] = useState({})

  // 获取拖拽元素的类型

  // const setGatesType = (type) => {
  //   setGeteType(type)
  //   console.log(geteType, 'geteType')
  // }
  // console.log(geteType, 'geteType')
  // 获取拖拽位释放gate位置的轴坐标
  const getDragCoordinate = (row, column) => {
    // setcoordinate(Coordinate)
    setcoordinate({ row, column })
  }
  const onDragEnd = () => {
    let circuitGateOne = {}
    let circuitGateTow = {}
    let circuitGateThree = {}
    console.log(coordinate, 'coordinate')
    if (geteType && coordinate) {
      switch (geteType.bit) {
        case 1:
          circuitGateOne = {
            id: nanoid(),
            name: geteType.name,
            row: coordinate.row,
            column: coordinate.column,
            isconnector: true,
          }
          circuitData[coordinate.column].splice(
            coordinate.row,
            0,
            circuitGateOne
          )
          break
        case 2:
          let id = nanoid()
          circuitGateOne = {
            id,
            name: geteType.name,
            row: coordinate.row,
            column: coordinate.column,
            isconnector: false,
            connector: 0,
          }
          circuitData[coordinate.column].splice(
            coordinate.row,
            0,
            circuitGateOne
          )
          circuitGateTow = {
            id,
            name: geteType.name,
            row: coordinate.row,
            column: coordinate.column,
            isconnector: true,
            connector: coordinate.column - 1,
          }
          circuitData[coordinate.column + 1].splice(
            coordinate.row,
            0,
            circuitGateTow
          )
          break
        default:
      }
    }
  }
  console.log(circuitData)
  return (
    <div className={styles.root}>
      <div className="container">
        <Row>
          <Col span={6}>
            <div className="edit">
              <Edit />
            </div>
          </Col>
          <Col span={18}>
            <div className="main">
              <div className="gateMenu">
                <gateTypeContext.Provider value={{ geteType, setGeteType }}>
                  <GateMenu />
                </gateTypeContext.Provider>
              </div>
              <div onMouseUp={onDragEnd} className="circuit">
                <Circuit
                  getDragCoordinate={(row, column) =>
                    getDragCoordinate(row, column)
                  }
                  circuitData={circuitData}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
