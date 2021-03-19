# Proto Buffer Angular Part

## How To code for my-self?

frist of all install `protobufjs` to your project.

```terminal
npm install protobufjs
```

then add command to the package.json

```json
    "pbts": "pbjs -t  static-module src/app/proto/*.proto -o src/app/objects/objects.js && pbts --no-comments src/app/objects/objects.js -o src/app/objects/objects.d.ts"
```

and run it with thic command in terminal.

```terminal
npm run pbts
```

then checkout `Api.srvice.ts` and `app.component.ts` files.

## How to run project for test?

run server [from this instruction](https://github.com/aliap1376ir/Proto-Buffer-Server-Part) then run

```
npm install
npm run start
```
Good luck!

Ali Azizi Pour
