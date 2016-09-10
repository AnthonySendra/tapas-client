# VNet

```
vnet
    .need('users.name')
    .fetch()
    .then((res) => console.log(res.users))
```

```
vnet
    .need('users.name')
    .need('users.age')
    .fetch()
    .then((res) => console.log(res.users))
```

```
vnet
    .need('user[0].name')
    .need('user[0].friends')
    .fetch()
    .then((res) => console.log(res.user))
```

```
vnet
    .need('users.name')
    .need('users.age')
    .need('users.friends.name')
    .need('users.friends.age')
    .fetch()
    .then((res) => console.log(res.users))
```

```
vnet
    .need('users.name')
    .need('users.age')

vnet
    .need('cats')

vnet
    .fetch()
    .then((res) => console.log(res.users, res.cats))
```

```
let users = vnet
    .need('users')

users.need('name', 'age')
users.with({<where, order, anything to pass to the server>})

let friends = users.need('friends')
friends.need('name')

vnet
    .fetch()
    .then((res) => console.log(res.users, res.cats))
```

```
let model = vnet.isolate()

vnet.need('cats')
model.need('users')

vnet
    .fetch()
    .then((res) => console.log(res.cats))

model
    .fetch()
    .then((res) => console.log(res.users))
```

```
let name$ = vnet.need('user[0].name')
name$
    .filter((name) => name.length > 2)
    .forEach((name) => console.log(name))

vnet.fetch()
```

```
let users$ = vnet
    .need('users.age')
    .need('users.name')
    .fetch()

users$
    .filter((user) => user.name.indexOf('a') === 0)
    .scan((totalAge, user) => totalAge + user.age, 0)
    .forEach((user) => console.log(user, totalAge))
```

```
vnet
    .need('users.name')
    .with({<where, order, anything to pass to the server>})
    .fetch()
    .then((res) => console.log(res.users))
```

```
vnet
    .need({'users': ['name', 'age', {friends: ['name', 'age']}]})
    .fetch()
    .then((res) => console.log(res.users))
```

```
vnet
    .need('users.name')
    .fetch({useCache: false})
    .then((res) => console.log(res.users))
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
    .then((res) => console.log(res.users))
```

```
vnet
    .fetch('users.name', 'users.age')
    .then((res) => console.log(res.users))
```

```
vnet
    .fetch('user[0].name', 'user[0].age', {useCache: false})
    .then((res) => console.log(res.users))
```

```
vnet
    .fetch({'users': ['name', 'age', {friends: ['name', 'age']}]})
    .then((res) => console.log(res.users))
```

```
vnet
    .fetch({
        'users': {
            attributes: ['name', 'age', {
                friends: ['name', 'age']
            }],
            with: {<where, order, anything to pass to the server>}
        }
    })
    .then((res) => console.log(res.users))
```
