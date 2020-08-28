import React, {Component} from "react"
import classes from "./Modal.module.css"

  class Modal extends Component {
    constructor (props) {
      super(props)
      
      this.state = {
        modalOpened: false
      }
      
      this.modalToggle = this.modalToggle.bind(this)
    }
    
    modalToggle () {
      this.setState({ modalOpened: !this.state.modalOpened })
    }
  
    render () {
      const coverStyles = [classes.ModalCover, classes.ModalCoverActive].join(' ')
      const containerStyles = [classes.ModalContainer, classes.ModalContainerActive].join(' ')
      const coverClass = this.state.modalOpened ? coverStyles : `${classes.ModalCover}`
      const containerClass = this.state.modalOpened ? containerStyles : `${classes.ModalContainer}`
      return (
        <div>
          <button className={`${classes.Btn}, ${classes.BtnPrimary}`} onClick={this.modalToggle}>Modal</button>
          
          <div className={`${containerClass}`}>
            <div className={classes.ModalHeader}>Hello</div>
            <div className={classes.ModalBody}>Hello</div>
            <button className={classes.ModalFooter} onClick={this.modalToggle}>Close</button>
          </div>
          
          <div className={`${coverClass}`} onClick={this.modalToggle}></div>
        </div>
      )
    }
  }
  
   


export default Modal