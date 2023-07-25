# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Application scope:
* Front-End:
   * Framework/Lib: [ReactJS](https://github.com/facebook/react) + [TypeScript](https://github.com/microsoft/TypeScript)
   * State-management: [MobX](https://github.com/mobxjs/mobx)
   * Build tool: [Vite](https://github.com/vitejs/vite)
   * Architecture: MVC
* Back-End:
   * Framework/Lib: NestJS + Ts
   * DBMS: Mysql
   * Database design: [TPC_CinemaDB](https://dbdiagram.io/d/641c55c2296d97641d8a4129)
   * Architecture: RESTful
> **Note:** The **Back-End** still in planning stage, more info will be updated later.
## Installation and start project:
   - Yarn:
   ```sh
      yarn
      yarn dev
   ```
   - NPM:
   ```sh
      npm install
      npm run dev
   ```
