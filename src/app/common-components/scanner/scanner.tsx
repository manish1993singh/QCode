import { Button, Modal } from "antd";
import { useState } from "react";
import style from "./scanner.module.scss";
import LocalScanner from "@/app/_components/scanner/local-scanner";
import { QrcodeOutlined, CheckCircleFilled } from "@ant-design/icons";

export interface IScanner extends React.PropsWithChildren {
  result: (data: any) => void | {};
}

export default function Scanner({ result }: IScanner) {
  const [qrCodeData, setQrCodeData] = useState<String | null>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setQrCodeData(null);
    setIsModalOpen(true);
  };

  const handleOk = (data: any) => {
    setQrCodeData(data);
    setIsModalOpen(false);
    result(data);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={style.qr_button_set}>
        <Button
          type="primary"
          shape="round"
          icon={<QrcodeOutlined />}
          size="middle"
          onClick={() => {
            showModal();
          }}
        >
          Scan
        </Button>
        {/* {qrCodeData && (
          <CheckCircleFilled style={{ color: "green", fontSize: "24px" }} />
        )} */}
      </div>
      <Modal
        title="Scan QR code"
        open={isModalOpen}
        onCancel={handleCancel}
        destroyOnClose={true}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancle
          </Button>,
        ]}
      >
        <LocalScanner
          result={(data: String) => {
            handleOk(data);
          }}
        />
      </Modal>
    </div>
  );
}
