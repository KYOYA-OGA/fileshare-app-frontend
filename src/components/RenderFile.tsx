import { sizeInMb } from 'libs/sizeInMb'
import { IFile } from 'libs/types'
import React from 'react'

interface Props {
  file: IFile
}

const RenderFile: React.FC<Props> = ({
  file: { format, sizeInBytes, name },
}) => {
  return (
    <div className="flex items-center w-full p-4 my-2">
      <img src={`/images/${format}.png`} alt="format" className="w-14 h-14" />
      <span className="mx-2">{name}</span>
      <span className="ml-auto">{sizeInMb(sizeInBytes)}</span>
    </div>
  )
}

export default RenderFile
