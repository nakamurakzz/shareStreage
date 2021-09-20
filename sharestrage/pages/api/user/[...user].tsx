import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {user} = req.query // 指定したパスパラメータが配列として渡される
  console.table(req.query)
  if(req.method=="PUT"){
    // ユーザの登録処理（departmentId:params[0],userId:params[1]を指定して更新する）
  }else if(req.method=="GET"){
    res.status(200).json({ departmentId:user[0],userId:user[1] });  
  }
};