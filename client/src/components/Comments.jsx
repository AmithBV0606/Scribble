import { useAuth, useUser } from "@clerk/clerk-react";
import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const fetchComments = async (postId) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return response.data;
};

const Comments = ({ postId }) => {
  const { getToken } = useAuth();

  const { user } = useUser();

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      desc: formData.get("desc"),
    };

    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col gap-8 lg:w-3/5 text-black">
      <h1 className="text-xl underline text-gray-300">Comments</h1>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-8 w-full"
      >
        <textarea
          name="desc"
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl text-black outline-none"
        />
        <button className="bg-blue-700 hover:bg-blue-600 px-4 py-3 rounded-xl text-white">
          Send
        </button>
      </form>

      {/* Here we're displaying the comments first and then we're storing it in our databases */}
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Error loading comments"
      ) : (
        <>
          {mutation.isPending && (
            <Comment
              comment={{
                desc: `${mutation.variables.desc} (Sending...)`,
                createdAt: new Date(),
                user: {
                  img: user.imageUrl,
                  username: user.username,
                },
              }}
            />
          )}

          {data.map((comment) => (
            <Comment key={comment?._id} comment={comment} postId={postId}/>
          ))}
        </>
      )}
    </div>
  );
};

export default Comments;