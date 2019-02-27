import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/root'
import configureStore from './store/store';

import "./actions/userActions"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root')
  const store = configureStore()

  window.store = store
  window.dispatch = store.dispatch

  ReactDOM.render(<Root store={store}/>, root)
})