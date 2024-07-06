# JavaScript 2024 Features Demo

This repository contains code examples and instructions for running the latest JavaScript features of 2024 in Visual Studio Code.

## Features Covered
- **Decorators**: Add extra behavior to classes and methods.
- **Records and Tuples**: Immutable data structures.
- **Pipeline Operator**: Simplify function chaining.
- **Temporal API**: Modern date and time handling.
- **Top-Level Await**: Use `await` at the top level of modules.

## How to Run the Code

### Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/Coding-Shanks/js-2024-features.git
    cd js-2024-features
    ```

2. Install necessary packages (if using Babel for decorators, etc.):
    ```bash
    npm install
    ```

3. Run JavaScript files with Node.js:
    ```bash
    node index.js
    ```

### Running Decorators Code

To run the code with decorators:

1. Install Babel and configure it:
    ```bash
    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/plugin-proposal-decorators
    ```

2. Create a `.babelrc` file with:
    ```json
    {
      "presets": ["@babel/preset-env"],
      "plugins": [["@babel/plugin-proposal-decorators", { "version": "legacy" }]]
    }
    ```

3. Transpile and run the code:
    ```bash
    npx babel index.js --out-file compiled.js
    node compiled.js
    ```

### Repository Link
Visit the [GitHub Repository](https://github.com/Coding-Shanks/js-2024-features) for the full code and instructions.
