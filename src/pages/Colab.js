import React from 'react';
import Navbar from './components/Navbar';

function Chart2() {
    return (
        <>
            <Navbar />
            <div style={{ width: '100%', height: '800px', marginTop: '20px' }}>
                <iframe
                    src="https://colab.research.google.com/drive/1e75ba5ow-eNbY1MrRr7Twq6eEQenFeAI?authuser=1"
                    title="Google Colab Embed"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    style={{ border: 'none' }}
                    allowFullScreen
                ></iframe>
            </div>
        </>
    );
}

export default Chart2;
