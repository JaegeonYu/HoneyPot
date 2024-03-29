import type { Metadata } from 'next';
import { Noto_Sans_KR, IBM_Plex_Sans_KR } from 'next/font/google';
import './globalTheme.css';
import * as Comp from '@/_components';
import ReactQueryProviders from './_lib-providers/ReactQueryProviders';
import { GoogleTagManager } from '@next/third-parties/google';
import { GA_TRACKING_ID } from '../lib/gtag';

export const ibmPlexSansKR = IBM_Plex_Sans_KR({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'fallback',
  subsets: ['latin'],
  variable: '--ibm-plex-sans-kr',
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

export const metadata: Metadata = {
  title: '여의도 꿀통',
  description: '당신의 꿀벌들은 열심히 일하고 있나요?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      {GA_TRACKING_ID && <GoogleTagManager gtmId={GA_TRACKING_ID} />}
      <body suppressHydrationWarning>
        <ReactQueryProviders>
          <Comp.Header />
          <main
            style={{
              width: '90%',
              maxWidth: '1240px',
              height: 'fit-content',
              padding: '42px 0px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            {children}
          </main>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
