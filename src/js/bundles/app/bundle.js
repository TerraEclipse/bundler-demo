import niceColors from './colors/nice'
import App from './components/App'

export default {
  _ns: 'app',
  _bundles: [niceColors],
  'components.App': App,
  'components.Counter': '#react-counter:components.Counter',
  'colors': '#colors:colors'
}