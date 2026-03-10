In this challenge, you are tasked with creating a type PathValue that will take an object and a string representing the path to a certain value within the object. Your job is to return the type of the value at that path. This will test your skills in generics, conditional types, and type inference.

Here's an example to get you started:

```typescript
const data = {
  user: {
    name: 'Alice',
    age: 30,
    address: {
      city: 'Wonderland'
    }
  }
} as const;

// The PathValue type should return the type of the value at the specified path.
type UserNameType = PathValue<typeof data, 'user.name'>; // Type: 'Alice'
```
