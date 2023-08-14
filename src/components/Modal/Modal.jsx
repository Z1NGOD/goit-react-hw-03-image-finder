import React, { Component } from 'react';
import { Overlay, ModalDiv, Img } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.props.closeModal}>
        <ModalDiv>
          <Img src={this.props.imageUrl} alt="Large" />
        </ModalDiv>
      </Overlay>
    );
  }
}

export default Modal;
