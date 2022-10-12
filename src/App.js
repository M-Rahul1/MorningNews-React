import './App.css';

import React, { useEffect,useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setsprogress] = useState(0)
  const [pageSize, setdpageSize] = useState(5)

  return (
    <>
        <NavBar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
        <Routes>
              <Route exact path="/business"
                  element={<News setprogress={progress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}
              />
              <Route exact path="/entertainment"
                  element={<News setprogress={progress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}
              />
              <Route exact path="/general"
                  element={<News setprogress={progress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}
              />
              <Route exact path="/health"
                  element={<News setprogress={progress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}
              />
              <Route exact path="/science"
                  element={<News setprogress={progress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}
              />
              <Route exact path="/sports"
                  element={<News setprogress={progress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}
              />
              <Route exact path="/technology"
                  element={<News setprogress={progress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}
              />
        </Routes>
      </>
  )
}

export default App