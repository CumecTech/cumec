import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Cumec",
  description: "Deliver manpower solutions to developers, contractors, PMCs, home owners and anyone who required Civil works",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
 
    </html>
  );
}
