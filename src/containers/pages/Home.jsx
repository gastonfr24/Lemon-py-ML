import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react"
import { connect } from "react-redux"
import { get_categories } from "redux/actions/categories"

import BlogList from "components/blog/BlogList"
import BlogCategories from "components/blog/BlogCategories"
import { get_blog_list, get_blog_list_page } from "redux/actions/blog"


function Home({categories,
    get_categories,
    get_blog_list,
    blog_list,
    count,
    get_blog_list_page
  }) {

  useEffect(() => {
    
    const fetchData = async ()=>{
      categories ? <></>:
      get_categories();
      get_blog_list()
    }
    fetchData()
  }, [])

  return (
      <FullWidthLayout>
<div className="bg-white dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="dark:text-zinc-300 mt-1 text-4xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
            Inteligencia Artificial con Python
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl sm:text-lg text-gray-500">
              Algoritmos de Machine Learning y Deep Learning con ejemplos.
         </p>
        </div>
      </div>
    </div>
    <BlogCategories/>
    <BlogList blog_list={blog_list && blog_list} 
           cout={count && count} get_blog_list_page={get_blog_list_page}/>
       
      </FullWidthLayout>
  )
}

const mapStateToProps = state =>({
  categories: state.categories.categories,
  blog_list: state.blog.blog_list
})

export default connect(mapStateToProps,{
  get_categories,
  get_blog_list,
  get_blog_list_page
})(Home)