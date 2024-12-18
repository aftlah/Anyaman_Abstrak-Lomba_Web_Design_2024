import "@/styles/globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "@/components/provider/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <title>SOFLEPRO</title>
      <link rel="shortcut icon" href="/images/logo.svg" type="image/x-icon" />
      <body className={`antialiased dark:bg-[#092534]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="pt-20 container mx-auto px-[10px] pb-10 max-w-[450px] md:max-w-5xl">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
