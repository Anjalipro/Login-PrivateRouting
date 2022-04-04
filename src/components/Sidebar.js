import React from 'react'

const Sidebar = ({width,height,background,children}) => {
  return (
    <div className="side-bar" style={{width: width, minHeight: height , background:background }}>
        <>{children}</>
      </div>
  )
}

export default Sidebar