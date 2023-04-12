import clientPromise from "@/app/mongodb"

export async function GET(request) {
  return new Response('Hello, Next.js!')
}

// export async function GET(request){
//   const client = await clientPromise;
//   const db = client.db("SampleDatabase");
//   const allPosts = await db.collection("allPosts").find({}).toArray();
//   console.log(allPosts);
//   return;
// }

// import clientPromise from "../../mongodb";

// export async function GET(req, res) {
//     const client = await clientPromise;
//     const db = client.db("SampleDatabase");
//     switch (req.method) {
//       case "POST":
//         let bodyObject = JSON.parse(req.body);
//         let myPost = await db.collection("posts").insertOne(bodyObject);
//         res.json(myPost.ops[0]);
//         break;
//       case "GET":
//         const allPosts = await db.collection("allPosts").find({}).toArray();
//         res.json({ status: 200, data: allPosts });
//         break;
//     }
//   }