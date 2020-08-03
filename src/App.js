import React from 'react'
import './App.css'
import Upload from './containers'
import 'react-toastify/dist/ReactToastify.css'
import './ReactToastify.custom.css'
import {Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
require('dotenv').config()

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <ToastContainer style={{width: 500, fontSize: 10}} className='c2-toast' bodyClassName='c2-toast-container' />
        <Route exact path='/watch/:id' component={Upload} />
      </header>
    </div>
  )
}

export default App
