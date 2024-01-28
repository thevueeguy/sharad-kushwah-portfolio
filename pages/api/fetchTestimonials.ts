import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Testimonial } from "../../typings";

const query = groq`
    *[_type == "testimonial"]
`;

type Data = {
    testimonials: Testimonial[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const testimonials: Testimonial[] = await sanityClient.fetch(query);
  res.status(200).json({ testimonials });
}
