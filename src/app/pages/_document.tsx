import { NextScript, Main, Head, Html } from "next/document";

export default function Document(){
    console.log('executing doocument file');
    return(
        <Html>
            <Head>
                <link rel="manifest" href="manifest/json" />
                <link rel="icon" href="/icons/icon-192x192.png" />
                <meta name="theme-color" content="#000000" />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}