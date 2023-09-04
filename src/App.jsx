import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { ArticlesByTopic } from './routes/Articles-by-topic';
import { Topics } from './routes/Topics'


function App() {

  return (
    <>
     <Routes>
       <Route path='/' element={<Topics />}></Route>
       <Route path='/topic/:topic' element={<ArticlesByTopic />}></Route>
     </Routes>
    </>
  )
}

export default App
