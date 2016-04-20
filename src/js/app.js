import bundler from './bundler/bundler'
import bundle from './bundle'

const conf = {
  rootId: 'root'
}

const app = bundler(bundle, conf)

let RootComponent = app.get('components', 'App')
let render = app.get('utils', 'render')

render(RootComponent)
