// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import theme from '../theme/theme';

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    return await NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html dir="rtl" lang="fa">
        <Head>
          <link rel="manifest" href="/manifest.webmanifest.json" />
          {/* <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `!function(){function t(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,localStorage.getItem("rayToken")?t.src="https://app.raychat.io/scripts/js/"+o+"?rid="+localStorage.getItem("rayToken")+"&href="+window.location.href:t.src="https://app.raychat.io/scripts/js/"+o+"?href="+window.location.href;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}var e=document,a=window,o="e472d5ce-e45b-4fe5-bf03-8eceb911906f";"complete"==e.readyState?t():a.attachEvent?a.attachEvent("onload",t):a.addEventListener("load",t,!1)}();`,
            }}
          /> */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: ` (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2601458,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          />
          <meta property="og:image" content="/images/og.png" />
          <meta property="og:title" content="پلتفرم گردشگری توریار" />
          <meta property="og:url" content="https://mytripper.ir" />
          <meta property="og:type" content="website" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
          <meta property="og:description" content="راهکار جامع گردشگری" />
          <meta property="og:locale" content="fa_IR" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
