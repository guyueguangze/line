import React from 'react'
import { Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import subbase from '../../../assets/img/legends/subbase.png'
import base from '../../../assets/img/legends/base.png'
import transformation from '../../../assets/img/legends/transformation.png'
import idletransformation from '../../../assets/img/legends/idletransformation.png'
export default function Title() {
  return (
    <div>
      <div className="title">
        Evolution
        <span className="title_name">
          <Tooltip
            placement="right"
            title={
              'Here is the panel to interpret the evolution of sub-quantum circuits by matrix representation or sankey diagram.'
            }
          >
            <InfoCircleOutlined></InfoCircleOutlined>
          </Tooltip>
        </span>
        <div className="pic_tip">
          <img src={subbase} alt="" />
          <span style={{ marginLeft: 10 }} className="tip_text">
            subbase
          </span>
        </div>
        <div className="pic_tip">
          <img src={base} alt="" />
          <span style={{ marginLeft: 10 }} className="tip_text">
            base
          </span>
        </div>
        <div className="pic_tip">
          <img src={transformation} alt="" />
          <span style={{ marginLeft: 10 }} className="tip_text">
            transformation
          </span>
        </div>
        <div className="pic_tip">
          <img src={idletransformation} alt="" />
          <span style={{ marginLeft: 10 }} className="tip_text">
            idle transformation
          </span>
        </div>
      </div>
    </div>
  )
}
