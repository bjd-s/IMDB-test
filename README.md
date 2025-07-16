# React + TypeScript + Vite + pnpm

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## Notes

- This project works with pnpm
- The .env file is not present in the .gitignore file (as it should be) and is sent to Git so that it is easier for the user to install and run the project.
- Images are sometimes not loaded in Firefox since they block some of IMDB assets (cross origin issue)


## Why and how to use

- This mini web app is a web development test. It has been developed in less than 12 hours.

- You can save a film or a tv show by clicking in "à regarder" (to see) or "vu" (seen) buttons.
When you click on those button the film or tv show should be added in the right panel.
When a film or a tv show is added it can only be in one list, so if it's on "à regarder" list it can't be on "vu" list.
When a film or a tv show is in "à regarder" list and you click on "vu" button it should be moved the "vu" panel and no more on "à regarder" panel, and vice versa

## I used

- Vite and pnpm for a fast build
- React query to fetch, cache, update and synchronize the data from IMDB database
- Context to have access to the data when and where I want without passing it from parent component to child component
- Typescript for static typing, safety and scalabilty
- Normalize.css to reset css
- Pure css since it's a small app it doesn't need a css framework, no styled component since it's a small app
