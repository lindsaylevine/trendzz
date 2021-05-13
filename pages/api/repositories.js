// export default async (req, res) => {
//   const response = { hello: "world" };
//   res.json(response);
//   res.end();
// };

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
