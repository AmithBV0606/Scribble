import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
        <h1 className="text-xl underline text-gray-300">Comments</h1>

        <div className="flex items-center justify-between gap-8 w-full">
            <textarea placeholder="Write a comment..." className="w-full p-4 rounded-xl"/>
            <button className="bg-blue-700 hover:bg-blue-600 px-4 py-3 rounded-xl">Send</button>
        </div>

        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </div>
  )
}

export default Comments;