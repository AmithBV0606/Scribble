import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>You should login</div>;
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a New Post</h1>

      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="p-2 rounded-xl text-sm text-white bg-blue-700 hover:bg-blue-600 w-max">
          Add a cover image
        </button>

        <input
          type="text"
          placeholder="My Awesome Story"
          className="outline-none text-4xl font-semibold bg-transparent"
        />

        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category :{" "}
          </label>
          <select
            name="cat"
            id=""
            className="text-black outline-none cursor-pointer p-2 rounded-xl bg-slate-50"
          >
            <option value="general">General</option>
            <option value="web-design">Web-Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <textarea
          name="desc"
          placeholder="A Short Description"
          className="outline-none p-4 rounded-xl text-black bg-slate-50"
        />

        <ReactQuill theme="snow" className="flex-1 rounded-xl bg-slate-50" />

        <button className="bg-blue-700 hover:bg-blue-600 text-white font-medium rounded-xl mt-4 p-2 w-36">
          Post
        </button>
      </form>
    </div>
  );
};

export default Write;
