# neutrino-electron-reference
A reference implementation for neutrino with Electron, React, linting, type checking & decorators.

See [neutrino-react-reference](https://github.com/jefffriesen/neutrino-react-reference) for a lot more documentation. Any changes to that repo will be pulled into this one.

#### Work in progress
This is not yet working. I get unintelligible errors after building. I think it's because I call `neutrino build && electron .` which builds a production build and points Electron it is. So no source maps. I need to create a dev build with neutrino and point Electron to it during development.

PRs very welcome.

#### To run:
```
yarn install         // install dependencies
yarn start-electron  // build and run Electron locally for dev
yarn publish         // TODO
```
