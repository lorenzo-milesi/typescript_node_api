# TypeScript-Node.Js MicroAPI

## Getting Started 
- Compile using `tsc`
- Run `node` on `dist\index.js`

## What's inside ?
- `dist` : contains compiled `typescript`
- `src` : contains API logic
    - `Controllers` : contains Controller classes, every controller gets called by a specific route.
    - `Core` : contains server's logic, environment classes, etc.
- `config.ts` : enables the possibility to set `NODE_ENV` with specific configurations such as server's ports, etc.
- `index.ts` : API starting point