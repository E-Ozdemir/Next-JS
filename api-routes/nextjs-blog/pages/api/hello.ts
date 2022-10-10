// req: An instance of http.IncomingMessage, plus some pre-built middlewares
// res: An instance of http.ServerResponse, plus some helper functions
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  text: string;
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: "Hello!" });
}

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     // Process a POST request
//   } else {
//     // Handle any other HTTP method
//   }
// }
