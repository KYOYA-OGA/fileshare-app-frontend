import React, { Dispatch, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

interface Props {
  setFile: Dispatch<any>
}

const DropZoneComponent: React.FC<Props> = ({ setFile }) => {
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0])
  }, [])

  const { getInputProps, getRootProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: 'image/jpeg, image/jpg, image/png, audio/mpeg',
    })
  return (
    <div className="w-full p-4">
      <div
        {...getRootProps()}
        className="w-full rounded-md cursor-pointer h-80 focus:outline-none"
      >
        <input {...getInputProps()} />
        <div
          className={
            'flex flex-col items-center justify-center h-full space-y-3 border-2 border-dashed border-yellow-light rounded-xl ' +
            (isDragReject === true ? 'border-red-500' : '') +
            (isDragAccept === true ? 'border-green-500' : '')
          }
        >
          <img src="/images/folder.png" alt="folder" className="w-16 h-16 " />
          {isDragReject ? (
            <p>おっと…jpg,pngまたはmp3限定です</p>
          ) : (
            <>
              <p>ここにファイルをドラッグ＆ドロップ</p>
              <p className="mt-2 text-gray-300">jpg,pngまたはmp3限定です</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default DropZoneComponent
