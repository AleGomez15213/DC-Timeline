import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const  query = req.query.slug;
    const client = await clientPromise;
    const db = client.db("strapi-atlas");
  
    const data = await db.collection("events").findOne({ slug : query});
    res.json(data);
}