import React from 'react';
import PropTypes from 'prop-types'
import './GifLoader.css'

function GifLoader(props){
    return <div className="gifloader">
              {props.gifs.length > 0 ?
                  props.gifs.map((gif, index) => {
                    return (<div className="gif" key={index}>
                              <img src={gif.images.downsized.url} alt="gif" height={150}></img>
                           </div>)
                  })
                :
                <p>Loading</p>
              }
           </div>
}

GifLoader.propTypes = {
  gifs:PropTypes.array.isRequired
}

export default GifLoader
