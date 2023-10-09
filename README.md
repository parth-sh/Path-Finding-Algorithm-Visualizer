# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# References:
https://www.freecodecamp.org/news/path-finding-algorithm-visualizer-tutorial/
https://houssein-algo-visualizer.netlify.app/
https://github.com/HousseinBadra/Algo-visualizer

# Setup (Vite a JS build tool)

npm create vite@latest Path-Finding\ Algorithm\ Visualizer/

✔ Package name: … path-finding-algorithm-visualizer

✔ Select a framework: › React

✔ Select a variant: › JavaScript + SWC

npm install && npm run dev

## Testing methods in node

let {getGrid} = await import("./src/utils/startingGrid.js");