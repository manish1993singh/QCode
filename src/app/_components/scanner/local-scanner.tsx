import React, { useRef, useEffect, useState } from 'react';
import jsQR from 'jsqr';
import Webcam from 'react-webcam';


export interface ILocalScanner {
    dataCallback: (data: String) => {}|void
}
const LocalScanner = (props: ILocalScanner) => {
  const webcamRef = useRef<Webcam>(null);
  const [qrCodeData, setQrCodeData] = useState<String|null>(null);
  const {dataCallback} = props;

  useEffect(() => {
    const interval = setInterval(() => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
          const image = new Image();
          image.src = imageSrc;
          image.onload = () => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if(context){
                canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);
            if (code) {
              setQrCodeData(code.data);
            }
            }
          };
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    qrCodeData && dataCallback && dataCallback(qrCodeData);
  },[qrCodeData])

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={320}
        height={240}
      />
    </div>
  );
};

export default LocalScanner;
