import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Traunship Landing Page",
  description: "Uma landing page informativa sobre foguetes"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
