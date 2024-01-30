import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';

import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'IT Курси від Niko IT Academy - Обирай курси програмування',
  description: 'IT Курси програмування від Niko IT Academy ⭐ Навчайся онлайн, стаціонар ★ Вигідна оплата ★ Викладачі-практики ★ Сертифікація ✔️Вивчай ІТ з нами!',
  keywords: 'іт курси, курси програмування, курси програмістів, курси qa, курси проджект менеджера, курси бізнес аналітика',

};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="uk">
    <head>
      <link rel="icon" href="/niko.ico"/>
    </head>
    <body className={inter.className}>{children}</body>
    </html>
  );
}
