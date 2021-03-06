import React, { Component } from 'react'
import Gallery from '@rumess/react-light-gallery'


export default class App extends Component {

  overlayContent = ( item, index ) => {
    return <h1 style={{textAlign: "center"}}>{item.caption}</h1>
  }
  render () {
    const items = [
      {
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        caption: 'Lion'
      },
      {
        image: 'https://images.unsplash.com/photo-1565378435089-7b0ff45a898e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        thumbnail: 'https://images.unsplash.com/photo-1565378435089-7b0ff45a898e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=430&q=80',
        caption: 'Yello hut on field'
      },
      {
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        caption: 'Lion'
      },
      {
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        caption: 'Lion'
      },
    ];

    return (
      <div>
        <Gallery 
          items={ items } 
          overlay={ this.overlayContent } 
          overlayColor="rgba( 255,0,0,.5 )"
        />
      </div>
    )
  }
}
