import renderBundle from './bundles/react-render/bundle'
import counterBundle from './bundles/react-counter/bundle'
import appBundle from './bundles/app/bundle'

export default {
  '_bundles': [
    appBundle,
    counterBundle,
    renderBundle
  ],
  '@react-render:conf.rootId': 'my-root',
  'utils.render': '#react-render:utils.render',
  'components.App': '#app:components.App'
}