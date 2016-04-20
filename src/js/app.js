import bundler from './bundler/bundler'
import bundle from './bundle'

const app = bundler(bundle)

let RootComponent = app.components.App
app.core.utils.render(RootComponent)
