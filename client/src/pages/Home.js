import React from 'react'

function Home() {
    return (
        <div>
            <div className="homeMovie">
                <video
                    src={`/video/datemovie.mp4`}
                    type="video/mp4"
                    autoPlay={true}
                    loop={true}
                />
            </div>
        </div>
    )
}

export default Home
