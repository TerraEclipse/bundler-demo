export default function bundler (bundle, conf = {}, app) {
  if (!app) {
    app = {conf}
  }

  if (bundle.bundles) {
    bundle.bundles.forEach((subBundle) => {
      bundler(subBundle, app.conf, app)
    })
  }

  Object.keys(bundle).forEach((category) => {
    if (category === 'bundles') return;
    if (typeof app[category] === 'undefined' && Array.isArray(bundle[category])) {
      app[category] = []
    }
    else if (typeof app[category] === 'undefined' && typeof bundle[category] === 'object') {
      app[category] = {}
    }
    if (Array.isArray(bundle[category])) {
      if (!Array.isArray(app[category])) {
        let err = new Error('app.' + category + ' is not an array')
        err.app = app
        err.bundle = bundle
        throw err
      }
      let arr = bundle[category].slice().map((el) => {
        if (typeof el === 'function' && el.name === 'container') {
          return el(app)
        }
        return el
      })
      app[category] = app[category].concat(arr)
    }
    else if (typeof bundle[category] === 'object') {
      if (Array.isArray(app[category])) {
        let err = new Error('app.' + category + ' is an array')
        err.app = app
        err.bundle = bundle
        throw err
      }
      Object.keys(bundle[category]).forEach(function (key) {
        app[category][key] = bundle[category][key]
        if (typeof app[category][key] === 'function' && app[category][key].name === 'container') {
          app[category][key] = app[category][key](app)
        }
      })
    }
  })

  app.get = function (category, key) {
    let ret = app[category]
    if (typeof ret === 'undefined') throw new Error('category not exported: ' + category)
    if (typeof key !== 'undefined') ret = ret[key]
    if (typeof ret === 'undefined') throw new Error('key not exported: ' + key)
    return ret
  }

  return app
}