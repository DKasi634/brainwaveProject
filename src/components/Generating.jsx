import React from 'react'
import { loading } from '../assets'

const Generating = ({className}) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}>
        <span className="-scale-y-100">
            <img src={loading} alt="Loading" className="w-5 h-5 mr-4 spin-inverse" />
        </span>
        Generating <span className=' animate-pulse ml-1'>...</span>
    </div>
  )
}

export default Generating