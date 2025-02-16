
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import SearchPage from './Components/SearchPage';
import SearchOutPut from './Components/SearchOutPut';

function App() {

  return (

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='/searchoutput' element={<SearchOutPut/>}/>

    </Routes>

  )
}

export default App
