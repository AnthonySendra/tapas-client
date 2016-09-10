# Tapas

## Read

```
tapas
    .need('users.name')
    .fetch()
    .then((res) => console.log(res.users))
```

```
tapas
    .need('users.name')
    .need('users.age')
    .fetch()
    .then((res) => console.log(res.users))
```

```
tapas
    .need('users.name', 'users.age')
    .fetch()
    .then((res) => console.log(res.users))
```

```
tapas
    .need('user[0].name')
    .need('user[0].friends')
    .fetch()
    .then((res) => console.log(res.user))
```

```
tapas
    .need('users.name')
    .need('users.age')
    .need('users.friends.name')
    .need('users.friends.age')
    .fetch()
    .then((res) => console.log(res.users))
```

```
tapas
    .need('users.name')
    .need('users.age')

tapas
    .need('cats')

tapas
    .fetch()
    .then((res) => console.log(res.users, res.cats))
```

```
tapas
    .need('users.name')
    .with({<where, order, size, from, anything to pass to the server>})
    .fetch()
    .then((res) => console.log(res.users))
```

```
tapas
    .need('users.name')
    .with('<param>', '<value>')
    .fetch()
    .then((res) => console.log(res.users))
```

```
let users = tapas
    .need('users.name')
    .with({<where, order, size, from, anything to pass to the server>})

users
    .fetch()
    .then((res) => {
        console.log('first page', res.users)
        return users.with('from', 10)
    })
    .then((res) => {
        console.log('second page', res.users)
    })
```

```
let users = tapas
    .need('users')

users.need('name', 'age')
users.with({<where, order, anything to pass to the server>})

let friends = users.need('friends')
friends.need('name')

tapas
    .fetch()
    .then((res) => console.log(res.users, res.cats))
```

```
let model = tapas.isolate()

tapas.need('cats')
model.need('users')

tapas
    .fetch()
    .then((res) => console.log(res.cats))

model
    .fetch()
    .then((res) => console.log(res.users))
```

```
let name$ = tapas.need('user[0].name')
name$
    .filter((name) => name.length > 2)
    .forEach((name) => console.log(name))

tapas.fetch()
```

```
let users$ = tapas
    .need('users.age')
    .need('users.name')
    .subscribe()

users$
    .filter((user) => user.name.indexOf('a') === 0)
    .scan((totalAge, user) => totalAge + user.age, 0)
    .forEach((user) => console.log(user, totalAge))
```

```
tapas
    .need({'users': ['name', 'age', {friends: ['name', 'age']}]})
    .fetch()
    .then((res) => console.log(res.users))
```

```
tapas
    .need('users.name')
    .fetch({useCache: false})
    .then((res) => console.log(res.users))
```

```
tapas
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
tapas
    .fetch('users.name', 'users.age')
    .then((res) => console.log(res.users))
```

```
tapas
    .fetch('user[0].name', 'user[0].age', {useCache: false})
    .then((res) => console.log(res.users))
```

```
tapas
    .fetch({'users': ['name', 'age', {friends: ['name', 'age']}]})
    .then((res) => console.log(res.users))
```

```
tapas
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

## Subscribe

```
tapas
    .need('users.name')
    .need('users.age')
    .need('users.friends.name')
    .need('users.friends.age')
    .subscribe()
    .forEach((res) => console.log(res.users))
```

## Write

```
tapas
    .send('user')
    .with({<attributes>})
    .need('user.id')
    .execute()
    .then((res) => console.log(res.user.id))
```

```
tapas
    .send('user')
    .with({<user attributs>})
    .with('friends', {<friends attributes>})
    .need('user.id')
    .need('friends.id')
    .execute()
    .then((res) => console.log(res.user.id, res.friends))
```
