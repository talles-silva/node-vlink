# Link Validator - Node.js

Link Validator is a Node.js tool developed in TypeScript for finding links in documents and validating them through HTTP requests. This project is designed to provide an efficient and versatile solution for checking the integrity of links in Markdown documents.

## Getting Started

### Prerequisites

Make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

Follow these steps to install and set up Basic Lib Node using npm or Yarn:

#### Using npm

1. Clone the repository:

   ```bash
   git clone https://github.com/talles-silva/node-vlink
   cd node-vlink
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

#### Using Yarn

1. Clone the repository:

   ```bash
   git clone https://github.com/talles-silva/node-vlink
   cd node-vlink
   ```

2. Install project dependencies:

   ```bash
   yarn
   ```

## Usage

Basic Lib Node provides several NPM scripts for different tasks:

- **Manual Usage:** You can manually run the build and start commands to find and validate links in a specified Markdown document.

   - **build:** Compiles the TypeScript code into JavaScript:

     ```bash
     npm run build
     ```

     or

     ```bash
     yarn build
     ```

   - **start:** Runs the project to find and validate links in a specified Markdown document. Replace `arquivos/texto.md` with the path to the Markdown document you want to analyze:

     ```bash
     npm start 
     ```

     or

     ```bash
     yarn start 
     ```

- **Automatic Usage:** For a more automated approach, you can use the `cli` script to streamline the process. It combines both the build and start steps into a single command. Usage:

   - **Using npm:**

     ```bash
     npm run cli
     ```

   - **Using Yarn:**

     ```bash
     yarn cli
     ```

- **Revalidation:** If you want to revalidate the links after making changes, you can use the `cli:validate` script. It performs both the build and validation steps. Replace `arquivos/texto.md` with the path to the Markdown document you want to analyze:

   - **Using npm:**

     ```bash
     npm run cli:validate
     ```

   - **Using Yarn:**

     ```bash
     yarn cli:validate
     ```
     
### Dependencies

- [chalk](https://www.npmjs.com/package/chalk): Used for styling terminal output.

### Development Dependencies

- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript type definitions for Node.js.

- [typescript](https://www.npmjs.com/package/typescript): The TypeScript compiler.

## Acknowledgments

- The Link Validator project utilizes various open-source libraries and tools to enhance its functionality.
