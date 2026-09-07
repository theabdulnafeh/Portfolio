import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Abdul Nafeh | MERN Stack Web Developer",
  description: "Portfolio of Abdul Nafeh - MERN Stack Web Developer",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} antialiased`}
    >
      <body className="font-[family-name:var(--font-montserrat)] bg-black text-white selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
