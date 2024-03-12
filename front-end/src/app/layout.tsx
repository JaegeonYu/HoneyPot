import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globalTheme.css';
import Header from '@/_components/Header/Header';

const notoSansKr = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'fallback',
  subsets: ['latin'],
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
      <body className={notoSansKr.className}>
        {children}

        <Header />
      </body>
    </html>
  );
}
