import clientPromise from "../mongodb";

export async function GET(request, response) {
  const client = await clientPromise;
  const db = client.db("SampleDatabase");
  const allPosts = await db.collection("todo").find({}).toArray();
  const all = JSON.stringify(allPosts);

  // console.log(all);

    return new Response(all);
    // return all;
    // return new Response(JSON.stringify(allPosts));
    // return new Response.write(JSON.stringify(allPosts));
    // return res.json(allPosts);
  }