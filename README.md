# @rumess/react-light-gallery

> 

[![NPM](https://img.shields.io/npm/v/@rumess/react-light-gallery)](https://www.npmjs.com/package/@rumess/react-light-gallery) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[DEMO](https://rumess.github.io/react-light-gallery/)

## Install

```bash
npm install --save @rumess/react-light-gallery
```

## Usage

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

    const galleryOptions = {
      overlayColor: "rgba( 0,0,0,.5 )", // String
      overlay: true, // true, false or function
      // overlay: ( item, index ) => {
      //   console.log( item, index );
      // },
    }
    return (
      <Gallery items={items} options={galleryOptions}/>
    )
  }
}

```

## License

MIT © [rumess](https://github.com/rumess)
