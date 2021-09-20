import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {id} = req.query
  if(req.method=="PUT"){
    // ユーザの登録処理
  }else if(req.method=="GET"){
    res.status(200).json({ id });  
  }
};