# Pretty Basic search engine

## Tech Stack
* [TurboRepo](turborepo.org)
* [Next.js](https://nextjs.org/)
* [Nest.js](https://nestjs.org/)
* [Prisma](https://www.prisma.io/)

## Turborepo starter

This is an official Yarn v1 starter turborepo.
### Apps and Packages

- `web`: another [Next.js](https://nextjs.org) app
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```

### Test

To test all apps and packages, run the following command:
```
cd my-turborepo
yarn run test
```

## Troubleshooting
* if you get an error like:
    ```
    Environment variable not found: DATABASE_URL.\n  -->  
    schema.prisma:6\n   | \n 5 |   provider = \"postgresql\"\n 6 |   
    url      = env(\"DATABASE_URL\")\n   | \n\nValidation Error Count: 1",
    ```
    Then you need to run `npx prisma generate` in the server path.
    This command will re-establish the link between schema.prisma and .env file.


## TODO
* [ ] Change the URL on search event.
* [ ] Add more tests.
* [ ] Add jest configurations to config packages.
