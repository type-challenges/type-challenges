Given a Tailwind-style color configuration object, extract all possible color names that can be used in your application. The type should handle both simple string values and nested objects with `DEFAULT` and variant keys.

For nested objects:
- `DEFAULT` key should use just the parent key name
- Other keys should be combined with the parent key using a dash separator

Use only the COLORS object to create your color type.

For example:

```ts
const COLORS = {
  border: 'hsl(var(--some-color))',

  primary: {
    DEFAULT: 'hsl(var(--some-color))',
    dark: 'hsl(var(--some-color))',
    light: 'hsl(var(--some-color))',
    foreground: 'hsl(var(--some-color))',
  },

  muted: {
    DEFAULT: 'hsl(var(--some-color))',
    foreground: 'hsl(var(--some-color))',
  },
}

type AppColor = ExtractColors<typeof COLORS>
// Result: "border" | "primary" | "primary-dark" | "primary-light" |
//         "primary-foreground" | "muted" | "muted-foreground"
```
