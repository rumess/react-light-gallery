# @rumess/react-light-gallery

> 

[![NPM](https://img.shields.io/npm/v/@rumess/react-light-gallery)](https://www.npmjs.com/package/@rumess/react-light-gallery) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[DEMO](https://rumess.github.io/react-light-gallery/)

## Install

```bash
npm install --save @rumess/react-light-gallery
```

## Usage

### Basic Usage
```jsx
import React, { Component } from 'react'

import Gallery from '@rumess/react-light-gallery'

class Example extends Component {
  render () {
    const items = [
      {
        name: 'Name here', // Optional
        image: '/path/to/image',
        thumbnail: '/path/to/image', // Optional
        caption: 'Caption here' // Optional
      },
      {
        name: 'Name here', // Optional
        image: '/path/to/image',
        thumbnail: '/path/to/image', // Optional
        caption: 'Caption here' // Optional
      },
      ...
    ];

    return (
      <Gallery items={ items } overlay={ true } overlayColor="rgba( 255,0,0,.5 )" />
    )
  }
}

```

### With overlay Contents
```jsx
import React, { Component } from 'react'

import Gallery from '@rumess/react-light-gallery'

class Example extends Component {
  overlayContent = ( item, index ) => {
    return <h1 style={{textAlign: "center"}}>{item.caption}</h1>
  }
  render () {
    const items = [
      {
        name: 'Name here', // Optional
        image: '/path/to/image',
        thumbnail: '/path/to/image', // Optional
        caption: 'Caption here' // Optional
      },
      {
        name: 'Name here', // Optional
        image: '/path/to/image',
        thumbnail: '/path/to/image', // Optional
        caption: 'Caption here' // Optional
      },
      ...
    ];

    return (
      <Gallery items={ items } overlay={ this.overlayContent } overlayColor="rgba( 255,0,0,.5 )" />
    )
  }
}
```

## License

MIT © [rumess](https://github.com/rumess)
