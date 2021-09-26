import type { NextApiRequest, NextApiResponse } from 'next'
import {prisma} from "../../../lib/prisma"


const SharedInfo = async(req: NextApiRequest, res: NextApiResponse)=> {
  const sharedInfoArray = await prisma.sharedInfo.findMany()
  res.json(sharedInfoArray.map(sharedInfo=>{
    const formatDate = new Date(sharedInfo.sharedDate)
    // 日付をフロント側でそのまま表示するようにレスポンス
    return {
      ...sharedInfo,
      formatDate: `${formatDate.getFullYear()}年${("0"+(formatDate.getMonth()+1)).slice(-2)}月${("0"+formatDate.getDate()).slice(-2)}日`
      }
  }))
}

export default SharedInfo