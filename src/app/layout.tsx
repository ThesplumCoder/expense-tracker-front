import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Expense tracker",
  description: "Develop by Anderson Acuña",
};

export default function RootLayout({ children }: 
  Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
