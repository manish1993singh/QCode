import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import style from './style.module.css';

export const Scanner = () => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
      constraints={{ facingMode: 'user' }}
        onResult={(result:any, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        className={style.scannerWidth}
      />
      <p>{data}</p>
    </>
  );
};