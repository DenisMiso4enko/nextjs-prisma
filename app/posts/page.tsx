import prisma from "@/lib/prisma";
import Link from "next/dist/client/link";

export default async function Posts() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8">
        Posts
      </h1>
      <div className="max-w-2xl flex flex-col space-y-4">
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <span className="font-semibold">{post.title}</span>
            <span className="text-sm text-gray-600 ml-2">
              by {post.author.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}