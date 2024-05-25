"use client";

import { useQuery } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/Post";
import getPostRecommends from "../_lib/getPostRecommends";
import { Post as IPost } from "@/model/Post";

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준 fresh면 안불러옴 개발자의 의도임
    gcTime: 300 * 1000, //인액티브면 gc타임 돌아감
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
