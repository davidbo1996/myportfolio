import Document, {Head, Main, NextScript} from 'next/document'; 

class MyDocument extends Document { 

    render() { 
        return (
            <html>
                <Head>
                    <meta name='description' content='A site for my programming portfolio'/>
                    <meta charset='utf-8' />
                    <meta name='robots' content='noindex, nofollow' />
                    <meta name='viewport' content='width=device-width' /> 
                <link rel='stylesheet' 
                href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js'/>
                <link rel="stylesheet" 
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" />              
                </Head>
                <body>
                    <Main />
                    <NextScript />     
                </body>
                <style jsx>
                    {`
                    body { 
                        font-familty: Roboto, sans-serif;
                    }
                    `}
                </style>
            </html>
        )
    }
}
export default MyDocument;