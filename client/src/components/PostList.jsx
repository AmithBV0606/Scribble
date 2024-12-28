import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import PostListItem from "./PostListItem";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";

const fetchPosts = async (pageParam, searchParams) => {
  const searchParamsObj = Object.fromEntries([...searchParams]);
  // console.log(searchParamsObj);
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam, limit: 10, ...searchParamsObj },
  });
  return response.data;
};

const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts", searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  // console.log(data);

  /*
    - Page : 1 = Posts[1,2]
    - Page : 2 = Posts[3,4]
    - Page : 3 = Posts[5,6]

    Using flatmap = [1,2,3,4,5,6]
  */

  // if (status === "loading") return "Loading...";
  if (isFetching) return "Loading...";

  // if (status === "error") return "Something went wrong!";
  if (error) return "Something went wrong!";

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4 className="mb-4">Loading more posts...</h4>}
      endMessage={
        <p className="mb-4">
          <b className="underline">All posts loaded!</b>
        </p>
      }
    >
      {allPosts.map((post) => (
        <PostListItem key={post?._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
