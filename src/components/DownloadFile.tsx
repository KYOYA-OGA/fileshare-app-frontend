import React from 'react'

interface Props {
  downloadPageLink: string
}

const DownloadFile: React.FC<Props> = ({ downloadPageLink }) => {
  return (
    <div className="p-1">
      <h1 className="my-2 text-lg font-medium">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
        incidunt nesciunt qui quia,{' '}
      </h1>
      <div className="flex space-x-3">
        <span className="break-all">{downloadPageLink}</span>
        <img
          src="/images/copy.png"
          alt="copy"
          className="object-contain w-8 h-8 transform cursor-pointer motion-safe:hover:scale-110"
          onClick={() => navigator.clipboard.writeText(downloadPageLink)}
        />
      </div>
    </div>
  )
}

export default DownloadFile
