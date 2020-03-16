import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Index extends Component {
    static defaultProps = {
        overlayColor: "rgba(0,0,0,0.4)",
        overlay: true
    }

    image = new Image();

    constructor( props ) {
        super( props );
        this.state = {
            items: [],
            loading: false,
        }
    }

    componentDidMount() {
        if( this.props.items && Array.isArray( this.props.items ) ) {
            this.setState( { items: this.props.items } );
        }
    }

    componentWillUpdate( nextProps, nextState ) {
        if( nextProps.items != this.props.items ) {
            this.setState( { items: this.props.items } );
        }
        
        if( nextState.currentItem != this.state.currentItem ) {
            this.setState( { previewImage: nextState.currentItem.thumbnail } );
        }
        
        if( nextState.currentItem && nextState.previewImage != nextState.currentItem.image ) {
            this.image.src = nextState.currentItem.image;
            this.image.onload = () => {
                this.setState( { previewImage: nextState.currentItem.image } );
            }
        }
    }

    previewImage = ( index ) => {
        this.setState( { currentItem: this.state.items[index], preview: true } );
        if( this.props.onImageView ) {
            this.props.onImageView( this.state.items[index] );
        }
    }

    previewClose = () => {
        this.setState( { preview: false, previewImageLoaded: false } );
    }

    render() {
        const{ items } = this.state;
        const { overlayColor, overlay } = this.props;

        return (
            <div className="gallery">
                <div className="gallery-content">
                    { items && items.map( ( item, index )=> (
                        <div className="item" key={`gallery-item-${index}`} onClick={ () => this.previewImage(index) } title={ item.name || item.caption }>
                            <img className="item-image" src={item.thumbnail || item.image} alt={ item.name || item.caption }/>
                            { overlay &&
                              <div className="overlay" style={{ background: overlayColor }}>
                                  { typeof overlay === "function" &&  overlay( item, index ) }
                              </div>
                            }
                        </div>
                    )) }
                </div>
            </div>
        )
    }
}

Index.propTypes = {
    items: PropTypes.array.isRequired
}

export default Index;
