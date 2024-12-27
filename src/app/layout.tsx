import Head from "next/head";
import ServiceWorkerRegistration from "./ServiceWorkerRegistration";
import "./globals.css";
import Style from "./page.module.scss";
import Header from "./common-components/header";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#qwr456" />
        <title>root title</title>
      </Head>
      <body>
        <AntdRegistry>
          <div className={Style.page}>
            <div className={Style.header_container}>
              <Header />
            </div>
            <div className={Style.content}>{children}</div>
            <div className={Style.footer_container}></div>
            <ServiceWorkerRegistration />
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
