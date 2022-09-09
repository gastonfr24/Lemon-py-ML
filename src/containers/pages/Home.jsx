import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react"
import { connect } from "react-redux"
import { get_categories } from "redux/actions/categories"

import BlogList from "components/blog/BlogList"
import BlogCategories from "components/blog/BlogCategories"
import { get_blog_list, get_blog_list_page } from "redux/actions/blog"

import Header from "components/home/Header"
import Content from "components/home/Content"

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
<Header/>
    <BlogCategories/>
    <BlogList blog_list={blog_list && blog_list} 
           cout={count && count} get_blog_list_page={get_blog_list_page}/>
      
{/*       <Content/> */}
       
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