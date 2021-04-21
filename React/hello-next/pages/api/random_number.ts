import { NextApiRequest, NextApiResponse } from 'next';

export default function (req: NextApiRequest, res: NextApiResponse) {
    // Not a react Components
    // res.json({status: "ok"});
    // res.json({num: Math.floor(Math.random() * 10)})
    console.log("Requested Body", req.body)
}
// http://localhost:3000/api/random_number