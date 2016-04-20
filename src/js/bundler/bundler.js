import merge from 'n-deep-merge'
import pointer from 'json-pointer'

export default function bundler (bundle, app) {
  // initialize 
  if (!app) {
    app = {}
  }

  if (toString.call(bundle) === '[object Function]' && bundle.name === 'container') {
    bundle = bundle(app)
  }

  if (bundle['_includes']) {
    bundle['_includes'].forEach((subBundle) => {
      bundler(subBundle, app)
    })
  }

  bundle = getValue(bundle)

  function getValue (orig) {
    let type = toString.call(orig)
    if (type === '[object Function]' && orig.name === 'container') {
      return orig(app)
    }
    if (type === '[object Array]') return orig.slice().map(getValue)
    if (type === '[object Object]') {
      let ret = {}
      Object.keys(orig).forEach((k) => {
        ret[k] = getValue(orig[k])
      })
      return ret
    }
    return orig
  }

  let tmp = {}
  Object.keys(bundle).forEach((p) => {
    if (p.charAt(0) === '_') return
    let val = getValue(bundle[p])
    pointer.set(tmp, '/' + p, val)
  })

  return merge(app, tmp)
}