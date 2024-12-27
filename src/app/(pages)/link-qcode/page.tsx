"use client";
import React, { useState } from "react";
import LocalScanner from "../../_components/scanner/local-scanner";
import { Button, Modal } from "antd";

import style from "./link-qcode.module.scss";
import Search from "@/app/common-components/search/search";
import Scanner from "@/app/common-components/scanner/scanner";
import SearchSelectUser from "@/app/common-components/search-select-user/SearchSelectUser";

function Scan() {
  const [qrCodeData, setQrCodeData] = useState<String | null>("");
  const [user, setUser] = useState<any | null>(null);

  return (
    <div>
      <br />
      <h1>Link User</h1>
      <br />
      {/* {qrCodeData && <div>DATA:{qrCodeData}</div>} */}
      <Scanner result={setQrCodeData} />
      <br />
      <label>Select user</label>
      <SearchSelectUser />
      <br />
      <Button type="primary">link</Button>
    </div>
  );
}

export default Scan;
