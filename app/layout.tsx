import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Jost } from "next/font/google"
import { ThemeProvider } from "@/providers/ThemeProvider"
import Loader from "@/components/Loader"
import Header from "@/components/layouts/header"
import "./globals.css"

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kono Agyemang | Software Engineer",
  description: "Software engineer specializing in React, Next.js, TypeScript, and polished frontend experiences.",
  applicationName: "Portfolio",
  openGraph: {
    type: "website",
    url: "https://devKono Agyemang.vercel.app/",
    title: "Kono Agyemang | Software Engineer",
    description:
      "Portfolio website showcasing frontend engineering, modern web development, and product-focused UI work.",
    siteName: "Portfolio website",
    // images: [
    //   {
    //     url: "https://i.ibb.co/m5bYtw6/responsive-showcase.png",
    //   },
    // ],
  },
  authors: {
    name: "Kono Agyemang",
  },
  generator: "NextJs",
  keywords: ["Software Engineer", "Frontend Developer", "React", "NextJS", "TypeScript"],
  creator: "Kono Agyemang",
  // icons: {
  //   icon: "/favicon.png",
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={jost.className}>
        <Loader />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
