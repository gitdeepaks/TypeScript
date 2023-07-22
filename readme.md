## _TypeScript_ 🚀 🎯

Here's a high-level overview of concepts in TypeScript, along with code snippets to illustrate each one. Remember, this is a brief introduction and not exhaustive. You might need to refer to official TypeScript documentation or books for detailed study.

1. **Installation and Compilation**

Before you start, you need to install Node.js and npm. Then, install TypeScript globally using npm.

```bash
npm install -g typescript
```

To compile a TypeScript file (.ts) to JavaScript (.js), use the `tsc` command.

```bash
tsc yourfile.ts
```

2. **Basic Types**

TypeScript supports basic data types like `string`, `number`, `boolean`, `array`, `any`, `void`, `null`, and `undefined`.

```typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let notSure: any = 4;
```

3. **Enum**

An enumeration is a way of giving friendly names to sets of numeric values.

```typescript
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```

4. **Tuple**

Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same.

```typescript
let x: [string, number];
x = ["hello", 10]; 
```

5. **Interface**

Interfaces in TypeScript are used to tell the compiler what the shape of the JS object should look like. It is a way to ensure that a class meets a certain contract.

```typescript
interface LabelledValue {
  label: string;
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
```

6. **Class**

Like JavaScript, TypeScript also has classes to work with object-oriented programming.

```typescript
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}
```

7. **Generics**

Generics provide a way to make components work with any data type and not restrict to one data type. They make the component reusable.

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

8. **Modules**

TypeScript has internal and external modules to handle large applications.

```typescript
import * as math from "lib/math";
console.log("2π = " + math.sum(math.pi, math.pi));
```

9. **Decorators**

Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members.

```typescript
@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}
```

10. **Advanced Types**

Advanced types in TypeScript include union types, type guards, type aliases, string literal types, numeric literal types, and more.

```typescript
type StringOrNumber = string | number;

function padLeft(value: string, padding: StringOrNumber) {
  // ...
}
```

Remember, TypeScript is a superset of JavaScript, so all JavaScript features and concepts also apply to TypeScript.
