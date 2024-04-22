import dbConnect from '../../lib/mongodb';
import Product from '../../models/Product'; // assuming you have a Product model set up

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const products = await Product.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    // Handle other methods 'POST', 'PUT', etc.
    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}
