import React from 'react'

function Button({btnColor , setColor}) {

  return (
    <div>
        <button
        onClick={() => setColor(btnColor)}
        className="outline-none px-2 py-2 rounded-2xl text-white"
        style={{ backgroundColor: btnColor }}
      >
        {btnColor}
      </button>
    </div>
  )
}

export default Button