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
                  className={`
              ${
                  post.category.name === "Machine Learning"
                      ? " bg-green-100 text-green-700"
                      : post.category.name === "Deep Learning"
                      ? "bg-rose-100 text-rose-700"
                      : post.category.name === "Inteligencia Artificial"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } 
              inline-flex items-center px-3 py-0.5 rounded-full text-sm font-gilroy-bold`}
              
              >
                {post.category.name}
              </Link>
            </p>
            <Link to={`/blog/post/${post.slug}`} className="block mt-2">
              <p className="text-xl font-semibold text-zinc-900 dark:text-zinc-200">
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
