"use client"
import React, { useState } from 'react';
import LocalScanner from '../../_components/scanner/local-scanner';

function Scan() {
    const [qrCodeData, setQrCodeData] = useState<String|null>('');
    const [shouldScan, setShouldScan] = useState<boolean>(false);

  return (
    <div>
        {shouldScan&&<LocalScanner dataCallback={(data: String)=> {setQrCodeData(data); setShouldScan(false)}}/>}
        {qrCodeData && <div>DATA:{qrCodeData}</div>}
        <button onClick={()=>{setQrCodeData(null); setShouldScan(true)}}>Scan QR code</button>
        <label>Select user</label>
        <input/>
        <button>link</button>
    </div>
  );
}

export default Scan;