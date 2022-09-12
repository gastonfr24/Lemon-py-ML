import { connect } from "react-redux"
import { get_categories } from "redux/actions/categories"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import LoadingCard from "components/loaders/LoadingCard"
import LoadingCardCategory from "components/loaders/LoadingCardCategory"

const BlogCategories =({get_categories, categories}) =>{

    useEffect(() => {
      get_categories()

    }, [])
    
    


    return(
        <div className="bg-white dark:bg-zinc-800 rounded-xl">
        <div className="py-8 sm:py-4  xl:max-w-7xl xl:mx-auto xl:px-8">
          <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
            <h2 className="text-2xl dark:text-gray-300 font-gilroy-bold tracking-tight text-gray-900">All Categories</h2>
            <Link to="/Blog/categories" className="hidden text-sm font-semibold text-gray-400 hover:text-gray-300 sm:block">
              Browse all categories<span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
  
          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                  {
                    categories ?
                    <>
                   { categories.map(category => (
                    <Link
                      key={category.name}
                      to={`/blog/category/${category.id}`}
                      className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img src={category.thumbnail} alt="" className="w-full h-full object-center object-cover" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-zinc-900 opacity-50"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                    </Link>
                  ))}
                    </>:
                    <>
                    <LoadingCardCategory/>
                    <LoadingCardCategory/>
                    <LoadingCardCategory/>

                    </>
                    

                  }

                </div>
              </div>
            </div>
          </div>
  
          <div className="mt-6 px-4 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-zinc-600 hover:text-zinc-500">
              Browse all categories<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    )
}

const mapToStateProps = state =>({
    categories : state.categories.categories
})

export default connect(mapToStateProps,{
    get_categories
})(BlogCategories)