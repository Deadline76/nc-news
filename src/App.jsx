import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { ArticlesByTopic } from './routes/Articles-by-topic';
import { Topics } from './routes/Topics'
import { SingleArticle } from './routes/Single-article';


function App() {

  return (
    <>
     <Routes>
       <Route path='/' element={<Topics />}></Route>
       <Route path='/topic/:topicName' element={<ArticlesByTopic />}></Route>
       <Route path='/topic' element={<ArticlesByTopic />}></Route>
       <Route path='/article/:articleId' element={<SingleArticle />}></Route>
     </Routes>
    </>
  )
}

export default App
