# JavaScript 2024 Features Demo

This repository contains code examples and instructions for running the latest JavaScript features of 2024 in Visual Studio Code.

# JavaScript 2024 Features Overview

This repository contains examples and explanations of new JavaScript features introduced in 2024. These features aim to enhance developer productivity, improve performance, and add new capabilities to JavaScript applications.

## Features Covered

1. **Decorators**
   - Example demonstrating how decorators can be used to modify class methods.

2. **Records and Tuples**
   - Example showcasing immutable data structures introduced as Records and Tuples.

3. **Pipeline Operator**
   - Demonstrates the pipeline operator for cleaner function chaining.

4. **Pattern Matching**
   - Shows how pattern matching simplifies conditional logic and value extraction.

5. **Temporal API**
   - Usage of the Temporal API for modern date and time handling.

6. **Top-Level Await**
   - Example illustrating top-level await for asynchronous module loading.

7. **Enhanced Array Methods**
   - New array methods for easier array manipulation.

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
