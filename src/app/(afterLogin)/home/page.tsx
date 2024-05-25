import style from "./home.module.css";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import Post from "@/app/(afterLogin)/_component/Post";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import PostRecommends from "./_component/PostRecommends";
import TabDecider from "./_component/TabDecider";
import { getPostRecommends } from "./_lib/getPostRecommends";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  const queryClient = new QueryClient();
  queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm me={session} />
          <TabDecider />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
