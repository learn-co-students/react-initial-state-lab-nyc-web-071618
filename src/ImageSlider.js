// <ImageSlider />
//   ✓ should set the `currentSlideIndex` to 0 on its state
//   ✓ render the correct text

import React, { Component } from 'react'
 class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlideIndex: 0
    }
  }
   render() {
    return(
      <div>I am on slide {this.state.currentSlideIndex}</div>
    );
  }
}
 export default ImageSlider;
