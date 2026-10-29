import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "School Bus Tracker",
  description: "Real-time school bus tracking and safety",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
