var Tapas = require('../lib/tapas').default
var tapas = new Tapas()

tapas.need('users.name').need('users.age')
