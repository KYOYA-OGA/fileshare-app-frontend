import RenderFile from '@components/RenderFile'
import axios from 'axios'
import { IFile } from 'libs/types'
import { GetServerSidePropsContext, NextPage } from 'next'
import React from 'react'
import fileDownload from 'js-file-download'

interface Props {
  file: IFile
}

const downloadPage: NextPage<Props> = ({ file }) => {
  const { format, name, sizeInBytes, id } = file

  const handleDownload = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/files/${id}/download`,
      {
        responseType: 'blob',
      }
    )
    fileDownload(data, name)
  }
  return (
    <div className="flex flex-col items-center justify-center py-3 space-y-4 bg-gray-800 rounded-md shadow-xl w-96">
      {!id ? (
        <span className="p-2 text-center">
          おっと…ファイルがありません。
          <br />
          URLを確認してもらえますか…？
        </span>
      ) : (
        <>
          <img
            src="/images/file-download.png"
            alt="download"
            className="w-16 h-16"
          />
          <h1 className="text-xl">ダウンロードできます</h1>
          <RenderFile file={{ format, name, sizeInBytes }} />
          <button className="w-44 my-btn" onClick={handleDownload}>
            ダウンロード
          </button>
        </>
      )}
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query
  let file
  try {
    const { data } = await axios.get(`http://localhost:8000/api/files/${id}`)
    file = data
  } catch (error) {
    console.log(error.response.data)
    file = {}
  }

  return {
    props: { file },
  }
}

export default downloadPage
