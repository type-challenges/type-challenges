```
Exported with AIPRM https://www.aiprm.com by J H on 2023. 3. 29. 오후 11:49:01
```

---

**User:**
tell me the difference from types below.

```ts
type Length<T extends readonly unknown[]> = T["length"]

type Length<T extends readonly unknown[]> = T extends { length: infer L }
  ? L
  : never
```

---

**ChatGPT:**
The two <code>Length</code> types you provided are functionally equivalent, as they both return the length of the given <code>readonly</code> array as a numeric literal type.
The main difference between the two types is in their implementation. The first type uses an indexed access type to extract the <code>length</code> property of the array, whereas the second type uses a conditional type with <code>infer</code> to extract the <code>length</code> property.
The first type definition is simpler and more concise, as it uses a straightforward indexed access type to extract the <code>length</code> property of the array. It is also slightly more performant, as indexed access types are generally faster than conditional types.
The second type definition is more flexible, as it can be extended to extract other properties of the array or perform more complex operations on the array type. It also provides more detailed type errors in case of invalid input types, as it uses <code>never</code> to indicate that the input type is not a valid <code>readonly</code> array.
In general, both <code>Length</code> types are valid and interchangeable. Which one you choose to use depends on your personal preference and the specific use case you have in mind.

---

**User:**
which one would be better to use in general?

---

**ChatGPT:**
Both of the <code>Length</code> types are valid and interchangeable, so which one to use depends on your preference and specific needs. However, if you are dealing with a large codebase, it may be better to use the first <code>Length</code> type definition, which uses indexed access types to extract the <code>length</code> property of the array. This is because indexed access types are generally faster and less computationally expensive than conditional types.
On the other hand, if you need more flexibility in your code or need to perform more complex operations on the array type, the second <code>Length</code> type definition, which uses a conditional type with <code>infer</code>, may be more suitable.
In general, it is good practice to use the simpler and more concise solution when possible, but always consider the specific needs of your project when making a decision.
