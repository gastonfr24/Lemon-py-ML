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
import CategoriesList from 'containers/pages/blog/categories/CategoriesList';
import About from 'components/about/About';

// IA Prjects & Machine Learning
import RegresionLS from 'containers/pages/ml/RegresionLS';
import ProjectsList from 'containers/pages/IA-Projects/ProjectsList';
import RegresionLM from 'containers/pages/ml/RegresionLM';
import RegresionPoli from 'containers/pages/ml/RegresionPoli';
import RegresionSVR from 'containers/pages/ml/RegresionSVR';

function App() {
  return (
    <Provider store={store}>
      <Router>
       <Routes>
        
          <Route path="*" element={<Error404/>} />

          <Route path="/" element={<Home/>} />

          <Route path="/acceder" element={<Acceder/>} />

          <Route path="/perfil/:user_account" element={<Profile/>} />

        {/* Otros */}

        <Route path='/about' element={<About/>} />

        <Route path='/contact' element={<Contact/>} />

        {/* Blog */}

        <Route path='/Blog' element={<Blog/>} />

        <Route path='/Blog/post/:slug' element={<BlogPost/>} />

        <Route path='/Blog/category/:category_id' element={<BlogCategory/>} />

        <Route path='/search/:term' element={<Search/>} />

        <Route path='/Blog/categories' element={<CategoriesList/>} />

        {/* Machine Learning */}

        <Route path='/ML/regresion-lineal-simple' element={<RegresionLS/>} />
        <Route path='/ML/regresion-lineal-multiple' element={<RegresionLM/>} />
        <Route path='/ML/regresion-polinomica' element={<RegresionPoli/>} />
        <Route path='/ML/support-vector-regression' element={<RegresionSVR/>} />



        <Route path='/IA-Projects' element={<ProjectsList/>} />


        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
