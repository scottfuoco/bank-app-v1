# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Steps

Scaffold project

```
pnpm create vite
```

Add Tailwind

```
pnpm add -D @storybook/addon-styling tailwindcss postcss autoprefixer
```

create postcss

```
// postcss.config.js

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

```
module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: {
          implementation: require.resolve('postcss'),
        },
      },
    },
  ],
  // snipped for brevity
};
```

```
// .storybook/preview.js

import '../src/tailwind.css'; // replace with the name of your tailwind css file
```
