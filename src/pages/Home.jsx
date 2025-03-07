import React from 'react'

const Home = () => {
    return (
        <div className="App">
            <p>Welcome {sessionStorage.getItem("userEmail")}</p>
        </div>
    )
}

export default Home
