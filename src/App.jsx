import { useState } from 'react'
import QRCode from 'qrcode'
import Header from './Components/Header'

function App() {

  const canvas = document.getElementById('qrcode')
  const [urlText, setUrlText] = useState("");

  function generateQR() {
    if (urlText != "") {
      QRCode.toCanvas(
        canvas,
        urlText,
        {
          color: { dark: '#22C55EFF', light: '#112233FF' },
          version: 3,
          errorCorrectionLevel: 'M',
          margin: 2,
          maskPattern: 7,
          scale: 10
        },
        (err) => {
          if (err) console.error(err);
        })
    }
  }

  function updateUrlText(e) {
    setUrlText(e.target.value);
    generateQR();
  }

  function downloadQR() {
    const canvasUrl = canvas.toDataURL();
    // Create an anchor, and set the href value to our data URL
    const createEl = document.createElement('a');
    createEl.href = canvasUrl;

    // This is the name of our downloaded file
    createEl.download = "qr";

    // Click the download button, causing a download, and then remove it
    createEl.click();
    createEl.remove();
  }

  return (
    <div className='h-screen bg-blue-50 max-w-6xl mx-auto'>
      <Header />
      <h2 className='text-3xl text-center font-bold mb-2 xl:text-4xl'>QR Code Maker for your needs</h2>
      <h3 className='text-xl text-center mb-4'>QR Code Generator</h3>

      <div className='p-6 w-fit bg-white shadow-md rounded-md max-md:mx-auto'>
        <h4 className='my-2 text-2xl font-semibold text-center'>Enter your website URL</h4>
        <input type="text" placeholder="https://example.com" id='inputBox' onChange={updateUrlText} className='my-2 mx-auto p-2 max-w-96 rounded border-2 focus:outline-none focus:border-green-500' />
        <button onClick={generateQR} className='p-2 rounded font-semibold bg-green-500 text-white block'>Generate QR</button>
      </div>
      <canvas id='qrcode'></canvas>
      <button onClick={downloadQR}>Download</button>
    </div>
  )
}

export default App
