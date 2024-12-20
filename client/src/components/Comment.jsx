import Image from "./Image";

const Comment = () => {
  return (
    <div className="bg-slate-50 p-4 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className={"w-10 h-10 rounded-full object-cover"}
          w={"40"}
        />
        <span className="font-medium text-gray-500">Jhon Doe</span>
        <span className="text-gray-500 text-sm">2 days ago</span>
      </div>

      <div className="mt-4 text-black">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          totam explicabo iusto provident in labore hic aliquid ab fugit nisi!
        </p>
      </div>
    </div>
  );
};

export default Comment;
