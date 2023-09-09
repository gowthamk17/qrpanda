import { useState } from 'react'
import QRCode from 'qrcode'
import Header from './Components/Header'

function App() {

  const canvas = document.getElementById('qrcode')
  const [urlText, setUrlText] = useState("");

  function generateQR() {
    if (urlText != "") {
      QRCode.toCanvas(canvas, urlText, (err) => {
        if (err) console.error(err);
      })
    }
  }

  function updateUrlText(e) {
    setUrlText(e.target.value);
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
    <div className='app'>
      <Header />
      <div className='text-3xl font-bold underline'>QR Generator</div>
      <input type="text" placeholder="Enter a Text..." id='inputBox' onChange={updateUrlText} />
      <button onClick={generateQR}>Generate QR</button>
      <canvas id='qrcode'></canvas>
      <button onClick={downloadQR}>Download</button>
    </div>

  )
}

export default App
