'''
npm install protobufjs
'''
add then add command to the package.json
'''
    "pbts": "pbjs -t  static-module src/app/proto/*.proto -o src/app/objects/objects.js && pbts --no-comments src/app/objects/objects.js -o src/app/objects/objects.d.ts"
'''




