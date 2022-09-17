import React from 'react'
import ReactDOM from 'react-dom'
import App from 'containers/App'
import Experience from 'containers/Experience'
import HomeButton from 'components/HomeButton'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <HomeButton /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/experiences/:id" element={<Experience />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
