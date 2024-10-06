import type { Metadata } from "next";
import {Rubik, Advent_Pro} from "next/font/google";
import { Provider } from  "./provider";
import "./globals.css";

const rubik = Rubik({
  subsets:['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-rubik',
});
const advent = Advent_Pro({
  subsets:['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-advent',
});

export const metadata: Metadata = {
  title: "Comedoria",
  description: "Booking and management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body
          className={`${rubik.variable} ${advent.variable} antialiased`}
        >
          {children}
        </body>        
      </Provider>
    </html>
  );
}
