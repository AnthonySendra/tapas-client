// {
//     need: { -> observable
//         fetch -> observable
//         with: this -> observable
//         need: this -> observable
//         subscribe -> observable
//     },
//     send: {
//         with: this
//         need
//         execute -> observable
//     }
//     fetch -> observable,
//     subscribe -> observable,
//     isolate ->
// }

import merge from 'deepmerge'

function Tapas (config) {
  this.cache = {}
  this.requests = {}
  this.needed = {}
  this.lastEntryPoint = null
}

Tapas.prototype.need = function () {
  Object.keys(arguments).forEach((index) => {
    this.lastEntryPoint = arguments[index].split('.')[0]
    this.needed = merge(this.needed, constructNeededWithPath(arguments[index]))
  })

  return this
}

function constructNeededWithPath (path) {
  let pathArray = path.split('.')
  let object = {}

  pathArray.reduce((prev, curr, index) => {
    if (pathArray.length - 1 === index) {
      prev[curr] = {
        cache: undefined
      }
    } else {
      prev[curr] = {}
    }

    return prev[curr]
  }, object)

  return object
}

export default Tapas
