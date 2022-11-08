import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document { 

render () {
return <Html  lang='en'>
<Head>  
            <link
            rel="preload"
            href="/fonts/IBMPlexSans-Bold.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/IBMPlexSans-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/IBMPlexSans-SemiBoldItalic.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>

</Head>
<Main></Main>



<NextScript/>
</Html>
}

}

export default Document;