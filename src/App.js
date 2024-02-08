import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutPage from './component/layout/LayoutPage';
import HomePage from './page/home/HomePage';
import AboutPage from './page/about/AboutPage';
import ServicePage from './page/service/ServicePage';
import BlogPage from './page/blog/BlogPage';
import ConstactPage from './page/contact/ConstactPage';
import AuthorReplyComment from './page/authorcomment/AuthorReplyComment';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPage/>} >
          <Route path='' element={<HomePage/>} />
          <Route path='about' element={<AboutPage/>} />
          <Route path='service' element={<ServicePage/>} />
          <Route path='blog' element={<BlogPage/>} />
          <Route path='contact' element={<ConstactPage/>} />
          <Route path='blog/author_comment' element={<AuthorReplyComment/>} />
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
 