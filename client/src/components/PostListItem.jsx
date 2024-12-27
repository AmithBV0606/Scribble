import Image from "./Image";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

const PostListItem = ({ post }) => {
  return (
    <div className="flex flex-col items-center xl:flex-row gap-8 mb-12">
      {/* Image */}
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image
            src={post.img}
            className={"rounded-2xl object-cover"}
            w="750"
          />
        </div>
      )}

      {/* Details */}
      <div className="flex flex-col gap-3 xl:w-2/3">
        <Link to={`/${post.slug}`} className="text-3xl font-semibold">
          {post.title}
        </Link>

        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link
            className="text-gray-300 underline"
            to={`/posts?author=${post.user.username}`}
          >
            {post.user.username}
          </Link>
          <span>on</span>
          <Link className="text-gray-300 underline">{post.category}</Link>
          <span>{format(post.createdAt)}</span>
        </div>

        <p className="text-justify">{post.desc}</p>

        <Link to={`/${post.slug}`} className="underline text-gray-300">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
