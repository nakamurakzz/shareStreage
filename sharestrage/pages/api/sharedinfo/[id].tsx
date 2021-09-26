import type { NextApiRequest, NextApiResponse } from 'next'
import {prisma} from "../../../lib/prisma"


const SharedInfoDetail = async(req: NextApiRequest, res: NextApiResponse)=> {
  const sharedInfo = await prisma.sharedInfo.findUnique({where:{id:Number(req.query.id)}})

  if(sharedInfo==undefined)return res.status(404)

  const formatDate = new Date(sharedInfo.sharedDate)
  res.json({...sharedInfo,formatDate: `${formatDate.getFullYear()}年${("0"+(formatDate.getMonth()+1)).slice(-2)}月${("0"+formatDate.getDate()).slice(-2)}日`
      })
}

export default SharedInfoDetail
