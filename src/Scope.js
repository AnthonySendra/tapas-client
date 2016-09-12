import merge from 'deepmerge'

function Scope () {
  this.needed = {}
  this.entryPointName = null
  this.with = null
}

Scope.prototype.need = function () {
  Object.keys(arguments).forEach((index) => {
    let entryPoint = arguments[index].split('.')[0]
    if (!this.entryPointName) {
      this.entryPointName = entryPoint
    }
    
    this.needed = merge(this.needed, constructNeededWithPath(arguments[index]))
  })

  console.log(this.needed)
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

export default Scope
