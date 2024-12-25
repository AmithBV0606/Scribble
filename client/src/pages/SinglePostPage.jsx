import { SignedIn, UserButton } from "@clerk/clerk-react";
import Image from "../components/Image";
import { Link, useParams } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async (slug) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts/${slug}`
  );
  return response.data;
};

// To change the text and background color of the text extracted from the quill editor
// const setColors = (html) => {
//   return html.replace(/style="([^"]*)"/g, (match, styles) => {
//       let newStyles = styles
//           .replace(/color:\s*rgb\((\d+),\s*(\d+),\s*(\d+)\);?/g, () => {
//               return `color: rgb(255, 255, 255);`; // Set text color to white
//           })
//           .replace(/background-color:\s*rgb\((\d+),\s*(\d+),\s*(\d+)\);?/g, () => {
//               return `background-color: rgb(10, 9, 8);`; // Set background color to black
//           });
//       return `style="${newStyles}"`;
//   });
// };

// To covert the HTML to plaintext
const BlogPost = ({ content }) => {
  // const styledContent = setColors(content);
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

const SinglePostPage = () => {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  console.log(data);

  if (isPending) {
    return "loading...";
  }

  if (error) {
    return "Something went wrong!" + error.message;
  }

  if (!data) {
    return "Post not found!";
  }

  return (
    <div className="flex flex-col gap-8 mt-4">
      {/* Details */}
      <div className="flex items-center gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          {/* Heading */}
          <h1 className="text-xl md:text-2xl xl:text-3xl 2xl:text-6xl font-semibold">
            {data.title}
          </h1>

          {/* Author details */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-gray-300 underline">
              {data.user.username}
            </Link>
            <span>on</span>
            <Link className="text-gray-300 underline">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>

          {/* Post description */}
          <p className="text-gray-300 font-medium">{data.desc}</p>
        </div>

        {data.img && (
          <div className="hidden lg:block w-2/5">
            <Image src={data.img} w={"600"} className={"rounded-xl"} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Text */}
        <div className="text-lg lg:text-base font-extralight flex flex-col gap-6 text-justify bg-black text-white">
          {/* <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            dignissimos voluptatem dolorum magni modi mollitia veniam laboriosam
            expedita, eligendi, qui cum itaque nostrum maxime hic vero quia
            doloremque quidem voluptas a rem laudantium error. At ducimus atque
            enim minus eos ullam, quaerat consectetur exercitationem quos, eaque
            neque quod iusto voluptas? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ullam dignissimos voluptatem dolorum magni modi
            mollitia veniam laboriosam expedita, eligendi, qui cum itaque
            nostrum maxime hic vero quia doloremque quidem voluptas a rem
            laudantium error. At ducimus atque enim minus eos ullam, quaerat
            consectetur exercitationem quos, eaque neque quod iusto voluptas?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            dignissimos voluptatem dolorum magni modi mollitia veniam laboriosam
            expedita, eligendi, qui cum itaque nostrum maxime hic vero quia
            doloremque quidem voluptas a rem laudantium error. At ducimus atque
            enim minus eos ullam, quaerat consectetur exercitationem quos, eaque
            neque quod iusto voluptas?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            dignissimos voluptatem dolorum magni modi mollitia veniam laboriosam
            expedita, eligendi, qui cum itaque nostrum maxime hic vero quia
            doloremque quidem voluptas a rem laudantium error. At ducimus atque
            enim minus eos ullam, quaerat consectetur exercitationem quos, eaque
            neque quod iusto voluptas? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ullam dignissimos voluptatem dolorum magni modi
            mollitia veniam laboriosam expedita, eligendi, qui cum itaque
            nostrum maxime hic vero quia doloremque quidem voluptas a rem
            laudantium error. At ducimus atque enim minus eos ullam, quaerat
            consectetur exercitationem quos, eaque neque quod iusto voluptas?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            dignissimos voluptatem dolorum magni modi mollitia veniam laboriosam
            expedita, eligendi, qui cum itaque nostrum maxime hic vero quia
            doloremque quidem voluptas a rem laudantium error. At ducimus atque
            enim minus eos ullam, quaerat consectetur exercitationem quos, eaque
            neque quod iusto voluptas?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            dignissimos voluptatem dolorum magni modi mollitia veniam laboriosam
            expedita, eligendi, qui cum itaque nostrum maxime hic vero quia
            doloremque quidem voluptas a rem laudantium error. At ducimus atque
            enim minus eos ullam, quaerat consectetur exercitationem quos, eaque
            neque quod iusto voluptas? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ullam dignissimos voluptatem dolorum magni modi
            mollitia veniam laboriosam expedita, eligendi, qui cum itaque
            nostrum maxime hic vero quia doloremque quidem voluptas a rem
            laudantium error. At ducimus atque enim minus eos ullam, quaerat
            consectetur exercitationem quos, eaque neque quod iusto voluptas?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            dignissimos voluptatem dolorum magni modi mollitia veniam laboriosam
            expedita, eligendi, qui cum itaque nostrum maxime hic vero quia
            doloremque quidem voluptas a rem laudantium error. At ducimus atque
            enim minus eos ullam, quaerat consectetur exercitationem quos, eaque
            neque quod iusto voluptas?
          </p> */}
          <BlogPost content={data.content} />
        </div>

        {/* Menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-base font-bold">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              {/* <SignedIn>
              <UserButton />
            </SignedIn> */}
              {data.user.img && (
                <Image
                  src={data.user.img}
                  className={"w-12 h-12 rounded-full object-cover"}
                  w="48"
                  h="48"
                />
              )}

              <Link className="text-gray-300">{data.user.username}</Link>
            </div>

            <p className="text-gray-300 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex gap-2">
              <Link>
                <Image src={"facebook.svg"} />
              </Link>

              <Link>
                <Image src={"instagram.svg"} />
              </Link>
            </div>
          </div>

          <PostMenuActions />

          <h1 className="mt-8 mb-4 text-base font-bold">Categories</h1>

          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <Link className="underline">All</Link>
            <Link className="underline" to={"/"}>
              Web Design
            </Link>
            <Link className="underline" to={"/"}>
              Development
            </Link>
            <Link className="underline" to={"/"}>
              Database
            </Link>
            <Link className="underline" to={"/"}>
              Search Engines
            </Link>
            <Link className="underline" to={"/"}>
              Marketing
            </Link>
          </div>

          <h1 className="mt-8 mb-4 text-base font-bold">Search</h1>

          <Search />
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default SinglePostPage;
