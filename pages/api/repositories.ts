import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const response = { hello: "world" };
  res.json(response);
  res.end();
};
