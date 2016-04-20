import coreBundle from './bundles/core/bundle'
import counterBundle from './bundles/counter/bundle'
import appBundle from './bundles/app/bundle'

export default {
  _includes: [coreBundle, counterBundle, appBundle],
  'conf/core/utils/render/rootId': 'my-root'
}