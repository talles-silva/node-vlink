# Basic Lib Node

Basic Lib Node is a Node.js tool developed in TypeScript for finding links in documents and validating them through HTTP requests. This project is designed to provide an efficient and versatile solution for checking the integrity of links in Markdown documents.

## Getting Started

### Prerequisites

Make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

Follow these steps to install and set up Basic Lib Node using npm or Yarn:

#### Using npm

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd basic-lib-node
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

#### Using Yarn

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd basic-lib-node
   ```

2. Install project dependencies:

   ```bash
   yarn
   ```

## Usage

Basic Lib Node provides several NPM scripts for different tasks:

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
   npm start -- arquivos/texto.md
   ```

   or

   ```bash
   yarn start -- arquivos/texto.md
   ```

- **cli:** A convenient script that combines building and running the project. Usage:

   ```bash
   npm run cli -- arquivos/texto.md
   ```

   or

   ```bash
   yarn cli -- arquivos/texto.md
   ```

- **cli:validate:** Similar to `cli`, but also includes the validation step for links. Replace `arquivos/texto.md` with the path to the Markdown document you want to analyze:

   ```bash
   npm run cli:validate -- arquivos/texto.md
   ```

   or

   ```bash
   yarn cli:validate -- arquivos/texto.md
   ```

### Dependencies

- [chalk](https://www.npmjs.com/package/chalk): Used for styling terminal output.

### Development Dependencies

- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript type definitions for Node.js.

- [typescript](https://www.npmjs.com/package/typescript): The TypeScript compiler.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions and improvements are welcome. Feel free to open issues and pull requests on the project's [GitHub repository](https://github.com/talles-silva/node-vlink).

## Acknowledgments

- The Basic Lib Node project utilizes various open-source libraries and tools to enhance its functionality.
