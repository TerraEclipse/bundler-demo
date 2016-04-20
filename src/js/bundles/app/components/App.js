import React, { Component } from 'react'

export default function container (app) {

  let colors = app.colors
  let Counter = app.features.counter.components.Counter

  class App extends Component {
    render () {
      return (
        <div>
          <Counter increment={1} color={colors.NICE} />
          <Counter increment={5} color={colors.SUPER_NICE} />
        </div>
      )
    }
  }

  return App
}