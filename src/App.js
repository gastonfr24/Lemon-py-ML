import { Provider } from 'react-redux'
import store from 'store';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//Containers
import Error404 from 'containers/errores/Error404';
import Home from 'containers/pages/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
       <Routes>
        
          <Route path="*" element={<Error404/>} />

          <Route path="/" element={<Home/>} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
