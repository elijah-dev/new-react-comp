# new-react-comp

Simple tool for faster react component generation. Only works with functional components and hooks (there is an option for react-redux hooks).

Simple example:

```bash
new-react-comp ExampleComponent
```

Will create .js file in current working directory with folowing code:

```javascript
import React from 'react';

const ExampleComponent = () => {
  return(
    <div>
    </div>
    )
};

export default ExampleComponent;
```

## Installation:

```bash
npm install -g new-react-comp
```

## Options:

### Specific path

Path for a component generation can be specified. Command will also generate any missing directory.
For example:

```bash
new-react-comp client/src/components/ExampleComponent
```

### Generation inside directory

There is an option to generate .js file inside a new directory with the same name as the component.
Example:

```bash
new-react-comp components/ExampleComponent -f
```

### Stylesheet generation

.css or .scss files can be generated as well in the same directory as the .js file and with the same name. Stylesheet file would be automatically imported into component.
Example:

```bash
new-react-comp components/ExampleComponent --scss
```

```javascript
import React from 'react';
import './ExampleComponent.scss';

const ExampleComponent = () => {
  return(
    <div>
    </div>
    )
};

export default ExampleComponent;
```
### Import hooks
#### React hooks:
```bash
new-react-comp components/ExampleComponent --effect --state
```
or
```bash
new-react-comp components/ExampleComponent -es
```
```javascript
import React,  { useEffect, useState} from 'react';

const ExampleComponent = () => {
  const [state, setState] = useState('');

  return(
    <div>
    </div>
    )
  };

export default ExampleComponent;
```
#### React-redux hooks:
```bash
new-react-comp components/ExampleComponent --selector --dispatch
```
or
```bash
new-react-comp components/ExampleComponent -ld
```
```javascript
import React from 'react';
import { useDispatch, useSelector} from 'react-redux';

const ExampleComponent = () => {
  const dispatch = useDispatch();

  const s = useSelector(state => state);

  return(
    <div>
    </div>
    )
  };

export default ExampleComponent;
```
### All options:
| Short version | Long version | Description                                                                                          |
|---------------|--------------|------------------------------------------------------------------------------------------------------|
| `-f`          | `--folder`   | Specifies if component has to be contained inside the folder                                         |
| `-s`          | `--state`    | Imports `useState` hook from `'react'` library                                                       |
| `-e`          | `--effect`   | Imports `useEffect` hook from `'react'` library                                                      |
| `-d`          | `--dispatch` | Imports `useDispatch` hook from `'react-redux'`                                                      |
| `-l`          | `--selector` | Imports `useSelector` hook from `'react-redux'`                                                      |
| `-p`          | `--props`    | Specifies if component has to take `props` as an argument                                            |
| none          | `--css`      | Creates `.css` file with the same name as the component and imports it in                            |
| none          | `--scss`     | Same as `--css` option, but will create `.scss` file. Only one of the stylesheet options can be used |