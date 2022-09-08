import { Provider } from 'react-redux'
import store from 'store';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//Containers
import Error404 from 'containers/errores/Error404';
import Home from 'containers/pages/Home';
import Acceder from 'containers/pages/Acceder';
import Profile from 'containers/pages/user/Profile';
// Blog Container
import Blog from 'containers/pages/blog/Blog';
import BlogPost from 'containers/pages/blog/Blog_post';
import Contact from 'containers/pages/contact/Contact';
import BlogCategory from 'containers/pages/blog/categories/BlogCategory';
import Search from 'containers/pages/Search';

function App() {
  return (
    <Provider store={store}>
      <Router>
       <Routes>
        
          <Route path="*" element={<Error404/>} />

          <Route path="/" element={<Home/>} />

          <Route path="/acceder" element={<Acceder/>} />

          <Route path="/perfil/:user_account" element={<Profile/>} />

        {/* Blog */}

          <Route path='/contact' element={<Contact/>} />

        <Route path='/Blog' element={<Blog/>} />

        <Route path='/Blog/post/:slug' element={<BlogPost/>} />

        <Route path='/Blog/category/:category_id' element={<BlogCategory/>} />

        <Route path='/search/:term' element={<Search/>} />


        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
