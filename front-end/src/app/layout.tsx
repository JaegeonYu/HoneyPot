import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globalTheme.css';
import * as Comp from '@/_components';

export const notoSansKr = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'fallback',
  subsets: ['latin'],
  variable: '--noto-sans-kr',
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
      <body className={`${notoSansKr.className}`}>
        <Comp.Header />
        <div
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
        </div>
      </body>
    </html>
  );
}
