import React from 'react'

const Box = ({ size, position, rotation }) => (
  <div className={`bg-gray-200 w-${size} h-${size} absolute`}
    style={{
      right: position.right,
      top: position.top,
      left: position.left,
      bottom: position.bottom,
      transform: `rotate(${rotation}deg)`,
    }}
  ></div>
)

export default Box