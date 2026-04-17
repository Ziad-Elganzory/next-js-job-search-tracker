import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Job Application Tracker",
    template: "%s | Job Application Tracker",
  },
  description:
    "Track job applications with a clean Kanban workflow. Organize applications, monitor interview stages, and stay on top of your job search.",
  applicationName: "Job Application Tracker",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Job Application Tracker",
    description:
      "Organize your job search with boards and columns built for every hiring stage.",
    siteName: "Job Application Tracker",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Job Application Tracker preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Application Tracker",
    description:
      "Track applications, interviews, and offers in one organized board.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
