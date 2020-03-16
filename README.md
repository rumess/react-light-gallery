# react-light-gallery

> 

[![NPM](https://img.shields.io/npm/v/react-light-gallery.svg)](https://www.npmjs.com/package/react-light-gallery) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-light-gallery
```

## Usage

```jsx
import React, { Component } from 'react'

import Gallery from 'react-light-gallery'

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
