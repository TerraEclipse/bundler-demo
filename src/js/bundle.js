import coreBundle from './bundles/core/bundle'
import counterBundle from './bundles/counter/bundle'
import appBundle from './bundles/app/bundle'

// [weight] = add to sorted array
// {weight} = merge to object
// @[weight] = map result

export default {
  '_bundles': [
    appBundle,
    counterBundle,
    coreBundle
  ],
  '@core.conf.rootId': 'my-root'
}