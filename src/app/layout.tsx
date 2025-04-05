import type { Metadata } from "next";
import { McLaren } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const mclaren = McLaren({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amit Tiwari",
  description:
    "Software Engineer with experience in web application development & expertise in various technologies",
  openGraph: {
    images: [
      {
        url: "",
        alt: "linkPreview",
      },
    ],
    url: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mclaren.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
