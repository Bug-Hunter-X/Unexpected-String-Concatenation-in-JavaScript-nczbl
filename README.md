# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript bug caused by loose typing.  The `foo` function attempts to add two numbers but performs string concatenation when one of the arguments is a string.

## Bug
The `bug.js` file contains a function `foo` that adds two arguments.  However, if one of the arguments is a string, the result will be string concatenation rather than numerical addition. This unexpected behavior can be hard to debug without proper type checking.

## Solution
The `bugSolution.js` file shows how to prevent this issue by explicitly checking the type of the arguments or using a stricter type system (e.g., TypeScript).