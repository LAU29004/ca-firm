import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Narhari V.Dixit & Co.",
  description: "Premier Chartered Accountant firm providing expert Income Tax, GST, Audit & Assurance, Corporate Compliance, and Strategic Business Advisory services for growing enterprises.",
  keywords: [
    "Chartered Accountants",
    "CA Firm",
    "Income Tax Planning",
    "GST Filing & Audit",
    "Statutory Audit",
    "Corporate Compliance",
    "Virtual CFO",
    "Business Advisory",
    "Accounting Services"
  ],
  authors: [{ name: "Apex & Partners CA" }],
  openGraph: {
    title: "Apex & Partners | Chartered Accountants & Business Advisory",
    description: "Clarity in Numbers. Confidence in Business. Expert CA, Tax & Audit solutions for enterprise success.",
    url: "https://apexca.example.com",
    siteName: "Apex & Partners CA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex & Partners | Chartered Accountants",
    description: "Clarity in Numbers. Confidence in Business. Premier CA Services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="bg-[#F8FAFC] text-[#647586] antialiased font-sans flex flex-col min-h-screen">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
