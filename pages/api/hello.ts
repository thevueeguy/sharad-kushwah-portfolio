import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  res.status(200).send('Heyo! This is Sharad and you are more than welcome here at reactguy.me');
}
