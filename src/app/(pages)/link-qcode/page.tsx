"use client";
import React, { useState } from "react";
import LocalScanner from "../../_components/scanner/local-scanner";
import { Button, Modal } from "antd";
import { QrcodeOutlined, CheckCircleFilled } from "@ant-design/icons";

import style from "./link-qcode.module.scss";
import Search from "@/app/common-components/search/search";

function Scan() {
  const [qrCodeData, setQrCodeData] = useState<String | null>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <br />
      <h1>Link User</h1>
      <br />
      {qrCodeData && <div>DATA:{qrCodeData}</div>}
      <div className={style.qr_button_set}>
        <Button
          type="primary"
          shape="round"
          icon={<QrcodeOutlined />}
          size="middle"
          onClick={() => {
            setQrCodeData(null);
            showModal();
          }}
        >
          Scan
        </Button>
        {qrCodeData && (
          <CheckCircleFilled style={{ color: "green", fontSize: "24px" }} />
        )}
      </div>
      <br />
      <label>Select user</label>
      <Search url={"jj"} onSearch={() => {}} />
      <br />
      <Button type="primary">link</Button>
      <Modal
        title="Scan QR code"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
        ]}
      >
        <LocalScanner
          dataCallback={(data: String) => {
            setQrCodeData(data);
            handleOk();
          }}
        />
      </Modal>
    </div>
  );
}

export default Scan;
