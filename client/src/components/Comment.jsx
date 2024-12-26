import { format } from "timeago.js";
import Image from "./Image";

const Comment = ({ comment }) => {
  return (
    <div className="bg-slate-50 p-4 rounded-xl">
      <div className="flex items-center gap-4">
        {comment.user.img && (
          <Image
            src={comment.user.img}
            className={"w-10 h-10 rounded-full object-cover"}
            w={"40"}
          />
        )}
        <span className="font-medium text-gray-500">
          {comment.user.username}
        </span>
        <span className="text-gray-500 text-sm">{format(comment.createdAt)}</span>
      </div>

      <div className="mt-4 text-black">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

export default Comment;