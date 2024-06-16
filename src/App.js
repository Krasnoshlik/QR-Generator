import { useEffect, useState } from 'react';

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);

  function handleClick() {
    setWord(temp);
  }

  return (
    <div className="max-w-96 flex flex-col justify-center items-center gap-11 m-auto pt-5">
      <h1 className="text-4xl">QR Code Generator</h1>
      <div className=' w-full'>

        <div className="text-lg flex items-center justify-between">
          <input
            type="text"
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Enter your text"
            className="border-2 rounded-2xl border-slate-500 px-3"
          />
          <button
            className="text-lg border-0 cursor-pointer rounded-2xl bg-slate-500 text-white px-3"
            onClick={handleClick}
          >
            Generate
          </button>
        </div>
        <div className="pt-5 flex justify-between">
          <label className=' flex flex-col'>
            <span>Background Color:</span>
            <input
              type="color"
              onChange={(e) => setBgColor(e.target.value.substring(1))}
            />
          </label>
          <label className=' max-w-32'>
            <span>Dimension:</span>
            <input
              type="range"
              min="200"
              max="600"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10">
        {qrCode && <img src={qrCode} alt="Generated QR Code" />}
        {qrCode && (
          <a href={qrCode} download="QRCode">
            <button type="button" className=' text-lg border-0 cursor-pointer rounded-2xl bg-slate-500 text-white px-3'>Download</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
