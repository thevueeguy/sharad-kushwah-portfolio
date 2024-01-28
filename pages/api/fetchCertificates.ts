import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Certificate } from "../../typings";

const query = groq`
    *[_type == "certificate"]
`;

type Data = {
    certificates: Certificate[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const certificates: Certificate[] = await sanityClient.fetch(query);
  res.status(200).json({ certificates });
}
