import React, { Component } from 'react'

export default function container (get) {
  let colors = get('colors')
  let Counter = get('components.Counter')

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