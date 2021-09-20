import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method=="POST"){
    // ユーザの登録処理
    const {name} = req.body
    res.status(200).json({ name });  
  }else if(req.method=="GET"){
    // ユーザ一覧取得
    res.status(200).json("");
  }
};