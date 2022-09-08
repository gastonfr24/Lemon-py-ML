import { Link } from "react-router-dom";

const BlogCard = (data) => {
  let post = data && data.data;



  function truncate(str) {
    return str.length > 100 ? str.substring(0, 111) + "..." : str;
}

  return (
    <div>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
        <Link
                to={`/blog/post/${post.slug}`}
                className="hover:underline"
              >
          <img
            className="h-48 w-full object-cover scale-110 transition-all duration-400 hover:scale-100"
            src={`${process.env.REACT_APP_API_URL}${post.thumbnail}`}
            alt=""
          />
          </Link>
        </div>
        <div className="flex-1 bg-white dark:bg-zinc-800 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <Link
                to={`/blog/category/${post.category.id}`}
                className="font-bold hover:underline"
              >
                {post.category.name}
              </Link>
            </p>
            <Link to={`/blog/post/${post.slug}`} className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {post.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{truncate(post.description)}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
