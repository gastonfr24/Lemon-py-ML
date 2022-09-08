import { useEffect } from "react"
import { connect } from "react-redux"
import { get_blog_list, get_blog_list_page } from "redux/actions/blog"
import LoadingCard from "components/loaders/LoadingCard"
import BlogCard from "./BlogCard"
import SmallPaginator from "components/pagination/SmallPaginator"


const BlogList=({
    blog_list,
    get_blog_list_page,
    count}) =>{


    
    
    return(
        <div>
            
            {
                blog_list ? 
                <>
                <div className="relative bg-gray-50  dark:bg-zinc-800 pb-8 px-4 sm:px-6 lg:pb-12 lg:px-8 dark:bg-zinc-800">
                    <div className="absolute inset-0">
                        <div className="bg-white dark:bg-zinc-800 h-1/3 sm:h-2/3" />
                    </div>
                    <div className="relative max-w-7xl mx-auto">
                        
                        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

                            {
                                blog_list.map(post=>(
                                    <BlogCard data={post}/>
                                ))
                            }
                        </div>
                            <SmallPaginator get_blog_list_page={get_blog_list_page} blog_list={blog_list} count={count}/>
                    </div>
                </div>
                </>:
                <>
                    <div className="relative bg-gray-50 dark:bg-zinc-800 pb-8 px-4 sm:px-6 lg:pb-12 lg:px-8">
                    <div className="absolute inset-0">
                        <div className="bg-white dark:bg-zinc-800 h-1/3 sm:h-2/3" />
                    </div>
                    <div className="relative max-w-7xl mx-auto">
                        
                        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

                        <LoadingCard/>
                        <LoadingCard/>
                        <LoadingCard/>
                        </div>
                    </div>
                </div>

                </>
            }
           
        </div>
    )
}

const mapToStateProps = state =>({

})

export default connect(mapToStateProps,{

})(BlogList)