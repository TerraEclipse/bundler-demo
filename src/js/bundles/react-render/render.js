import React from 'react'
import ReactDOM from 'react-dom'

export default function container (get) {
  let rootId = get('conf.rootId')
  return (RootComponent) => {
    ReactDOM.render(<RootComponent />, document.getElementById(rootId))
  }
}