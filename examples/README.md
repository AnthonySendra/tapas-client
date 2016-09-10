# VNet

```
vnet
    .need('users.name')
    .fetch()
```

```
vnet
    .need('users.name')
    .need('users.age')
    .fetch()
```

```
vnet
    .need('user[0].name')
    .need('user[0].friends')
    .fetch()
```

```
vnet
    .need('users.name')
    .need('users.age')
    .need('users.friends.name')
    .need('users.friends.age')
    .fetch()
```

```
vnet
    .need('users.name')
    .need('users.age')

vnet
    .need('cats')

vnet.fetch()
```

```
let users = vnet
    .need('users')

users.need('name', 'age')
users.with({<where, order, anything to pass to the server>})

let friends = users.need('friends')
friends.need('name')

vnet.fetch()
```

```
let model = vnet.isolate()

vnet.need('cats')
model.need('users')

vnet.fetch()
model.fetch()
```

```
let name$ = vnet.need('user[0].name')
name$
    .filter((name) => name.length > 2)
    .forEach((name) => console.log(name))

vnet.fetch()
```

```
let totalAge = 0
let users$ = vnet
    .need('users.age')
    .need('users.name')
    .fetch()

users$
    .filter((user) => user.age > 21)
    .forEach((user) => totalAge += user.age)
```

```
vnet
    .need('users.name')
    .with({<where, order, anything to pass to the server>})
    .fetch()
```

```
vnet
    .need({'users': ['name', 'age', {friends: ['name', 'age']}]})
    .fetch()
```

```
vnet
    .need('users.name')
    .fetch({useCache: false})
```

```
vnet
    .need({
        'users': {
            attributes: ['name', 'age', {
                friends: ['name', 'age']
            }],
            with: {<where, order, anything to pass to the server>}
        }
    })
    .fetch()
```

```
vnet.fetch('users.name', 'users.age')
```

```
vnet.fetch('user[0].name', 'user[0].age', {useCache: false})
```

```
vnet.fetch({'users': ['name', 'age', {friends: ['name', 'age']}]})
```

```
vnet.fetch({
    'users': {
        attributes: ['name', 'age', {
            friends: ['name', 'age']
        }],
        with: {<where, order, anything to pass to the server>}
    }
})
```
