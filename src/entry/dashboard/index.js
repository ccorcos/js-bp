import 'styles/base.scss'
import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Header from 'ui/header'

const root = document.getElementById('root')
const renderRoot = (component) =>
  ReactDOM.render(component, root)

const render = () =>
  renderRoot(
    <div>
      <Header/>
      <section>
        <h2>Requiring images in JS</h2>
        This one should have a hashed url.
        <div><img src={require('images/fine.png')}/></div>
        This one should be base64 inlined.
        <div><img src={require('images/check.png')}/></div>
      </section>
      <section>
        <h2>Requiring images in CSS</h2>
        This one should have a hashed url.
        <div className="background-image"></div>
        This one should be base64 inlined.
        <div className="inline-background-image"></div>
      </section>
    </div>
  )

// this will get ripped out by the uglify plugin when building for production
if (DEV) {
  console.log('Welcome to the development dashboard')
}

render()
