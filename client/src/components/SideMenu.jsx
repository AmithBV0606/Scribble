import { Link, useSearchParams } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (e) => {
    if (searchParams.get("sort") !== e.target.value) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        sort: e.target.value,
      });
    }
  };

  const handleCategoryChange = (category) => {
    if (searchParams.get("cat") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat: category,
      });
    }
  };

  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-lg font-medium">Search</h1>
      <div className="w-max">
        <Search />
      </div>

      <h1 className="mt-8 mb-4 text-lg font-medium">Filters</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-white cursor-pointer rounded-sm checked:bg-blue-700"
          />
          Newest
        </label>

        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-white cursor-pointer rounded-sm checked:bg-blue-700"
          />
          Most Popular
        </label>

        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-white cursor-pointer rounded-sm checked:bg-blue-700"
          />
          Trending
        </label>

        {/* Note : Trending post is calculated based on the post which has most number of visits and that post was uploaded before last 7 days. */}

        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            // onChange={(e) => console.log(e.target.value)}
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-white cursor-pointer rounded-sm checked:bg-blue-700"
          />
          Oldest
        </label>
      </div>

      <h1 className="mt-8 mb-4 text-lg font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm text-gray-300">
        <Link
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("general")}
        >
          All
        </Link>
        <Link
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("web-design")}
        >
          Web Design
        </Link>
        <Link
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("development")}
        >
          Development
        </Link>
        <Link
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("databases")}
        >
          Databases
        </Link>
        <Link
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("seo")}
        >
          Search Engines
        </Link>
        <Link
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("marketing")}
        >
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;