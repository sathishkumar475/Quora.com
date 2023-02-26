import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Main from './Main';
import Answers from './Answers';
import Questions from './Questions';
import Signin from './Signin';
import Signup from './Signup';
import Createquestion from './Createquestion';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Main />} />
      <Route path='/answers/:id' element={<Answers />} />
      <Route path='/yourquestions' element={<Questions />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/createquestion' element={<Createquestion />} />
      <Route path='*' element={<h2 className='text-center'>404 page not found</h2>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
