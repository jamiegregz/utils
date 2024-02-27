# `@utils/try-catch`

Wraps a method with a `try`/`catch` block and standardises the result in the following format:

```typescript
{
  result: any | null
  error: typeof Error | null
}
```

## Example usage

```typescript
import { tryCatch } from '@utils/try-catch'

const myMethod = () => {
  // Do something which could throw here....
}

const methodResult = tryCatch(myMethod)

if (methodResult.error) {
  // An error occured
  console.error(methodResult.error)
}

console.log(methodResult.result)
```
