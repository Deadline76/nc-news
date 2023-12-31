import './App.css'
import { Routes, Route } from 'react-router-dom';
import { ArticlesByTopic } from './routes/Articles-by-topic';
import { Topics } from './routes/Topics'
import { SingleArticle } from './routes/Single-article';
import { UserProvider } from './Contexts/User-context';
import { NotFound } from './components/Not-Found';



function App() {

  return (
    <UserProvider>
     <Routes>
       <Route path='/' element={<Topics />}></Route>
       <Route path='/topic/:topicName' element={<ArticlesByTopic />}></Route>
       <Route path='/topic' element={<ArticlesByTopic />}></Route>
       <Route path='/article/:articleId' element={<SingleArticle />}></Route>
       <Route path='*' element={<NotFound />}></Route>
     </Routes>
    </UserProvider>
  )
}

export default App
