import React, {Component, useContext} from "react"
import classes from "./Modal.module.css"
import {Context} from "../../../store"
import SaveCountry from "../../SetCountries/SaveCountry"
import {Link} from 'react-router-dom'
 
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
        <Context.Consumer>

          { store => (
            <div >
            {console.log(store)}
              <button className={`${classes.Btn}, ${classes.BtnPrimary}`} onClick={this.modalToggle}>Save</button>
            <div className={`${containerClass}`}>
            { store.user ? <SaveCountry country={store.countries} /> : <h3 style={{marginTop: "1rem"}}>Please <Link to="/register">Register</Link> To Track Your Countries</h3>}
            {/* <div className={classes.ModalBody}>Please register your User to be able to add a country. Thank You!</div>
            <button className={classes.ModalFooter} onClick={this.modalToggle}>Close</button>  */}
          </div>

          <div className={`${coverClass}`} onClick={this.modalToggle}></div>
        </div>
          )}
        </Context.Consumer>
      )
    }
  }




export default Modal
