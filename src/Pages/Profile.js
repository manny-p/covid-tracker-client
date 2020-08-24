import React, { Component } from 'react'
import Footer from '../components/Footer/Footer'

class Profile extends Component {
    render() {
        const styles = {
            backgroundColor: "black", 
            position: "relative", 
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            clear: "both"
        }

    return (
        <div style={styles}>
            <h1>Profile</h1>
            <Footer />
        </div>
    )
}
}

export default Profile