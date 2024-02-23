[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![CI Next.js](https://github.com/andreas-bauer/visual-test-review/actions/workflows/nextjs.yml/badge.svg)](https://github.com/andreas-bauer/visual-test-review/actions/workflows/nextjs.yml)

# Visual Test Review

Visualizing GUI-based tests for Code Reviews

## Architecture

The following diagram shows an overview of the planned architecture.
It will be updated as the project progresses and the requirements are gathered.

![architecture](./docs/architecture_overview.png)

## Frontend

See [frontend](./frontend) folder.

### Build

Install all dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Development

Before committing code, ensure the code style is followed by running:

```bash
npm run format:fix
```

## License

Copyright © 2024 Andreas Bauer

This work (source code) is licensed under the [Apache-2.0](./LICENSE) license.
