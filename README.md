1. Run `npm ci`
2. Run `npm run parcel`

It should error with a `ReferenceError: Cannot access 'ClassOne' before initialization` message.

3. Run `npm run tsc`

It outputs `[class ClassOne]`
