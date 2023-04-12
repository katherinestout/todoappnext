import clientPromise from "../../mongodb";



export async function GET(request) {
  const client = await clientPromise;
  const db = client.db("SampleDatabase");
  const allPosts = await db.collection("todo").find({}).toArray();
  console.log(allPosts);
    return new Response(allPosts);
  }