import { Provider } from 'react-redux'
import store from 'store';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//Containers
import Error404 from 'containers/errores/Error404';
import Home from 'containers/pages/Home';
import Acceder from 'containers/pages/Acceder';
import Profile from 'containers/pages/user/Profile';

function App() {
  return (
    <Provider store={store}>
      <Router>
       <Routes>
        
          <Route path="*" element={<Error404/>} />

          <Route path="/" element={<Home/>} />

          <Route path="/acceder" element={<Acceder/>} />

          <Route path="/perfil/:user_account" element={<Profile/>} />


        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
