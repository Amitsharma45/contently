import * as React from 'react'
import { TbLoader2 } from 'react-icons/tb'

const LoadingSpinner = () => {
    return (
        <TbLoader2 className="w-full animate-spin text-3xl text-color_two" />
    )
}

export default LoadingSpinner