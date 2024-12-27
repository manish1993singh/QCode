"use client";
import React, { useState } from "react";
import { Button, Card, Alert } from "antd";
import Scanner from "@/app/common-components/scanner/scanner";
import SearchSelectUser from "@/app/common-components/search-select-user/SearchSelectUser";
import style from "./link-qcode.module.scss";

function Scan() {
  const [qrCodeData, setQrCodeData] = useState<String | null>("");
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  return (
    <div>
      <br />
      <h1>Link User</h1>
      <br />
      <Card className={style.card} title="Scan QR code">
        <div className={style.card_body}>
          <Scanner result={setQrCodeData} />
          {qrCodeData && (
            <Alert type="success" message="QR code scan successfully" />
          )}
        </div>
      </Card>
      <br />
      <Card className={style.card} title="Select user">
        <div className={style.card_body}>
          <SearchSelectUser result={setSelectedUser} />
          {selectedUser && <Alert type="success" message="User selected" />}
        </div>
      </Card>

      <br />
      <div className={style.link_button_container}>
        <Button type="primary">link</Button>
      </div>
    </div>
  );
}

export default Scan;
