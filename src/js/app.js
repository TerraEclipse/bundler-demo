import bundler from '@terraeclipse/bundler'
import bundle from './bundle'

const app = bundler(bundle)
let RootComponent = app.get('components.App')
app.get('utils.render')(RootComponent)