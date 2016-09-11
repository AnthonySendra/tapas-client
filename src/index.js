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

import Scope from './Scope'

function Tapas (config) {
  this.cache = {}
  this.requests = {}
}

Tapas.prototype.need = function () {
  let scope = new Scope()
  let paths = Object.keys(arguments).map((value) => arguments[value])

  return scope.need.apply(scope, paths)
}

export default Tapas
