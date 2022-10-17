import React, { useState, useEffect, useContext } from 'react'
import Gate from '../Gate'
import styles from './index.module.scss'
import cphase from '../../../../assets/svg/cphase.png'
import cry from '../../../../assets/svg/cry.png'
import crz from '../../../../assets/svg/crz.png'
import cx from '../../../../assets/svg/cx.png'
import h from '../../../../assets/svg/h.png'
import rx from '../../../../assets/svg/rx.png'
import ry from '../../../../assets/svg/ry.png'
import rz from '../../../../assets/svg/rz.png'
import swap from '../../../../assets/svg/swap.png'
import crx from '../../../../assets/svg/crx.png'
import { gateTypeContext } from '../../Context'
export default function GateMenu(props) {
  const { setGeteType } = useContext(gateTypeContext)
  const gateType = [
    { name: 'h', bit: 1 },
    { name: 'rx', bit: 1 },
    { name: 'ry', bit: 1 },
    { name: 'cx', bit: 2 },
    { name: 'rz', bit: 1 },
    { name: 'crx', bit: 2 },
    { name: 'cry', bit: 2 },
    { name: 'swap', bit: 2 },
    { name: 'crz', bit: 2 },
  ]
  let setType = ''
  const onMouseDown = (e) => {
    e.preventDefault()
    // 获取点击的svg元素
    const currentSvgNode = e.nativeEvent.path.find(
      (dom) => dom.className === 'draggable'
    ).firstChild
    setType = gateType[currentSvgNode.getAttribute('type')]
    if (currentSvgNode.getAttribute('type')) {
      // console.log(setType, 'type')
      setGeteType(setType)
      // props.setGatesType({ name: 55, age: 3 })

      e.stopPropagation()

      let img = document.createElement('img')
      img.style.position = 'fixed'
      img.style.cursor = 'pointer'
      img.style.pointerEvents = 'none'
      img.style.display = 'none'

      switch (setType.name) {
        case 'h':
          img.src = h
          break
        case 'rx':
          img.src = rx
          break
        case 'ry':
          img.src = ry
          break
        case 'cx':
          img.src = cx
          break
        case 'rz':
          img.src = rz
          break
        case 'crx':
          img.src = crx
          break
        case 'cry':
          img.src = cry
          break
        case 'swap':
          img.src = swap
          break
        case 'crz':
          img.src = crz
          break
        default:
      }
      img.draggable = false
      document.querySelector('.container').appendChild(img)
      document.addEventListener('mousemove', function (e) {
        img.style.left = `${e.pageX - 16}px`
        img.style.top = `${e.pageY - 16}px`
        img.style.display = 'block'
      })
      document.addEventListener('mouseup', function (e) {
        if (img) {
          setGeteType(null)
          img.remove()
          // img.parentNode.removeChild(img)
        }
      })
    }
  }

  return (
    <div
      draggable={false}
      style={{ height: '100%', width: '100%' }}
      className={styles.root}
    >
      <div draggable={false} className="drag">
        {gateType.map((item, index) => (
          <span
            type={item}
            className="draggable"
            key={item.name}
            onMouseDown={onMouseDown}
          >
            <svg
              className="svg"
              type={index}
              cursor="grap"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              draggable={false}
              width={32}
              height={32}
            >
              <Gate type={item.name}></Gate>
            </svg>
          </span>
        ))}
      </div>
    </div>
  )
}
