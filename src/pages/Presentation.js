import React from 'react'
import Navbar from './components/Navbar';

function Chart2() {
    return (
        <>
        <Navbar></Navbar>
        <div style={{ marginTop: '20px' }}>
                <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vQwaUjMhnCKok20xEPOEHivel0GqN78Wlsv9driQ4sV-k5tz1Q_BzSPxjkLjIGnJt6uSGUEsbqS3Ntt/embed?start=false&loop=false&delayms=3000"
                    frameBorder="0"
                    width="100%"
                    height="569" // Adjust the height as needed
                    allowFullScreen="true"
                    mozAllowFullScreen="true"
                    webkitAllowFullScreen="true"
                    title="Google Slides Embed"
                ></iframe>
            </div>
        </>
    )
}

export default Chart2