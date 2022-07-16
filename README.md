# Demo electron react ts app 

:joy:

See the [tutorial](https://www.electronforge.io/guides/framework-integration/react-with-typescript) to create project (hot reloading and so on).

## require:

- install node, npm, yarn
- 


Now you can do the following:

```sh
# create project 
yarn create electron-app <name-app> --template=typescript-webpack

# Add the React dependencies
yarn add react react-dom
yarn add --dev @types/react @types/react-dom

# start project
yarn start
```

add 2 file

``` js
// file ./src/app.tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function render() {
  ReactDOM.render(<h2>Hello from React!</h2>, document.body);
}

render();
```

``` js
// ./src/renderer.ts
// Add this to the end of the existing file
import './app';
```

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/template-electron-installation/blob/master/LICENSE.md) for details.
