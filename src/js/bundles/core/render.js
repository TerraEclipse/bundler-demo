import React from 'react'
import ReactDOM from 'react-dom'

export default function container (app) {
  return (RootComponent) => {
    ReactDOM.render(<RootComponent />, document.getElementById(app.conf.core.utils.render.rootId))
  }
}