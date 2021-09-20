import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method=="POST"){
    const {id} = req.body
    res.status(200).json({ id });  
  }else if(req.method=="GET"){
    const {id} = req.query
    res.status(200).json({ id });  
  }
};