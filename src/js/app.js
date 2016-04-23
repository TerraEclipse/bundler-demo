import bundler from './bundler/bundler'
import bundle from './bundle'

const app = bundler(bundle)
let RootComponent = app.get('app.components.App')
app.get('core.utils.render')(RootComponent)