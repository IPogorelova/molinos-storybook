import React from 'react';
import Scrollbar from 'smooth-scrollbar';
import StyledScrollCont from './StyledScrollCont';

class smoothScroll extends React.Component {
  componentDidMount() {
    Scrollbar.init(this.el);
  }

  componentWillUnmount() {
    Scrollbar.destroy(this.el);
  }

  render() {
    return (
      <StyledScrollCont
        id="my-scrollbar"
        ref={function(el) {
          this.el = el;
        }}
      >
        <div className="scroll__item">1</div>
        <div className="scroll__item">2</div>
        <div className="scroll__item">3</div>
        <div className="scroll__item">4</div>
        <div className="scroll__item">5</div>
        <div className="scroll__item">6</div>
      </StyledScrollCont>
    );
  }
}

export default smoothScroll;
