import { useState, useEffect } from 'react'
import QRCode from 'qrcode'
import Header from './Components/Header'
import Hero from './Components/Hero'

function App() {

  const canvas = document.getElementById('qrcode');
  const [urlText, setUrlText] = useState("https://github.com/gowthamk17");
  const [imgType, setImgType] = useState('image/png');
  const [margin, setMargin] = useState(4);
  const [ECLevel, setEcLevel] = useState('H');

  useEffect(() => {
    generateQR();
  }, []);

  function generateQR() {
    QRCode.toCanvas(
      canvas,
      urlText,
      {
        width: 250,
        color: { dark: '#22C55EFF', light: '#112233FF' },
        errorCorrectionLevel: ECLevel,
        margin: margin,
      },
      (err) => {
        if (err) console.error(err);
      })
  }

  function updateUrlText(e) {
    setUrlText(e.target.value);
    generateQR();
  }

  function updateImgType(e) {
    setImgType(e.target.dataset.img);
  }

  function updateMargin(e) {
      setMargin(e.target.value);
  }

  function updateECLevel(e) {
    setEcLevel(e.target.value);
  }

  function downloadQR() {
    const canvasUrl = canvas.toDataURL(imgType);
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
    <div className='h-screen bg-blue-50 max-w-6xl mx-auto border-black'>
      <Header />
      <Hero />

      <div className='flex flex-col items-center lg:items-stretch justify-center lg:flex-row lg:mx-auto mx-4 mb-12'>

        <div className='w-full max-w-lg lg:w-2/3 p-6 m-2 bg-white text-gray-800 shadow-md rounded-md max-md:mx-auto'>
          <h4 className='my-2 text-2xl font-semibold text-center'>Enter your website URL</h4>
          <input type="text" placeholder="https://example.com" id='inputBox' onInput={updateUrlText} className='w-full max-w-lg my-3 p-3 rounded border-2 focus:outline-none focus:border-green-500' />
          
          <div className='flex items-center'>
            <label htmlFor="qr-margin" className='my-2 text-lg w-1/2 font-semibold mr-4'>QR Margin</label>
            <input type="number" name="qr-margin" onInput={updateMargin} defaultValue={4} min={0} max={32} className='my-2 p-2 w-1/2 rounded border-2 focus:outline-none focus:border-green-500'/>
          </div>
          
          <div className="flex items-center">
            <label htmlFor="qr-ec" className='my-2 text-lg w-1/2 block font-semibold mr-4'>Error Correction Level</label>
            <select name="qr-ec" value={ECLevel} onChange={updateECLevel} className='my-2 mx-1 p-2 w-1/2 inline mb-4 rounded border-2 focus:outline-none focus:border-green-500'>
              <option value="L">Low</option>
              <option value="M">Medium</option>
              <option value="Q">Quartile</option>
              <option value="H">High</option>
            </select>
          </div>
          
          <button onClick={generateQR} className='p-2 mx-auto rounded font-semibold bg-green-500 text-white block'>Generate QR</button>
        </div>

        <div className='w-full max-w-lg lg:w-1/3 p-6 m-2 bg-white text-gray-800 shadow-md rounded-md max-md:mx-auto'>
          <h4 className='my-2 text-2xl font-semibold text-center'>Preview QR Code</h4>
          <canvas id='qrcode' className='border-1 my-3 p-3 mx-auto rounded'></canvas>
          <div className='flex gap-2 justify-center mb-4'>
            <button className='px-3 py-1 border-2 text-gray-500 font-semibold rounded focus:text-green-500 focus:border-green-500 focus:outline-none'
              data-img="image/png"
              onFocus={updateImgType}>PNG</button>
            <button className='px-3 py-1 border-2 text-gray-500 font-semibold rounded focus:text-green-500 focus:border-green-500 focus:outline-none'
              data-img="image/jpeg"
              onFocus={updateImgType}>JPEG</button>
            <button className='px-3 py-1 border-2 text-gray-500 font-semibold rounded focus:text-green-500 focus:border-green-500 focus:outline-none'
              data-img="image/webp"
              onFocus={updateImgType}>WEBP</button>
          </div>
          <button
            className='p-2 mx-auto rounded font-semibold bg-green-500 text-white block'
            onClick={downloadQR}>Download QR Code</button>
        </div>

      </div>
      <div className='text-center mb-4'>Made By 👨‍💻 <a href="https://github.com/gowthamk17/" className='text-blue-600'>Gowthamk17</a></div>
    </div>
  )
}

export default App
