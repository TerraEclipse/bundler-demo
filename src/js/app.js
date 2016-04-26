import bundler from '@terraeclipse/bundler'
import bundle from './bundle'

const {components, utils} = bundler(bundle).export()
utils.render(components.App)