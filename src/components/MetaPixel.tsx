"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { Suspense, useEffect } from "react";

const META_PIXEL_ID = "144475034122275";

declare global {
  interface Window {
    fbq?: (
      command: string,
      eventName: string,
      parameters?: Record<string, unknown>,
    ) => void;
    _fbq?: unknown;
  }
}

function MetaPixelPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.fbq) {
      return;
    }

    window.fbq("track", "PageView");
  }, [pathname, searchParams]);

  return null;
}

export default function MetaPixel() {
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {
            if(f.fbq)return;
            n=f.fbq=function(){
              n.callMethod
                ? n.callMethod.apply(n,arguments)
                : n.queue.push(arguments)
            };

            if(!f._fbq)f._fbq=n;

            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];

            t=b.createElement(e);
            t.async=!0;
            t.src=v;

            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s);
          }(
            window,
            document,
            'script',
            'https://connect.facebook.net/en_US/fbevents.js'
          );

          fbq('init', '${META_PIXEL_ID}');
        `}
      </Script>

      <Suspense fallback={null}>
        <MetaPixelPageView />
      </Suspense>

      <noscript>
        <img
          height="1"
          width="1"
          alt=""
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}