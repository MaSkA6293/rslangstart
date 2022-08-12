import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import Error from './components/Error/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
