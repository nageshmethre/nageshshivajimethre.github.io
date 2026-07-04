import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nagesh Methre | Python Full-Stack & Django Developer",
  description: "Professional developer portfolio of Nagesh Methre, MCA student at REVA University specializing in Python, Django, MySQL, and cybersecurity.",
  keywords: [
    "Nagesh Methre", 
    "Nagesh Shivaji Methre",
    "Nagesh", 
    "Methre", 
    "Nagesh Portfolio", 
    "Python Developer India", 
    "Django Developer", 
    "REVA University MCA",
    "Software Engineer India"
  ],
  authors: [{ name: "Nagesh Methre" }],
  creator: "Nagesh Methre",
  metadataBase: new URL("https://nageshmethre.dev"),
  alternates: {
    canonical: "https://nageshmethre.dev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/profile.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-placeholder-code",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nageshmethre.dev",
    title: "Nagesh Methre | Python Full-Stack & Django Developer",
    description: "Professional developer portfolio of Nagesh Methre, MCA student at REVA University specializing in Python, Django, MySQL, and cybersecurity.",
    siteName: "Nagesh Methre Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 512,
        height: 512,
        alt: "Nagesh Methre Profile",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagesh Methre | Python Full-Stack & Django Developer",
    description: "Professional developer portfolio of Nagesh Methre, MCA student at REVA University specializing in Python, Django, MySQL, and cybersecurity.",
    images: ["/profile.png"],
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
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nagesh Methre",
              "url": "https://nageshmethre.dev",
              "jobTitle": "Python Full-Stack Developer & Django Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance / Student at REVA University"
              },
              "sameAs": [
                "https://github.com/nageshmethre",
                "https://www.linkedin.com/in/nageshmethre"
              ],
              "knowsAbout": [
                "Python",
                "Django",
                "MySQL",
                "JavaScript",
                "React",
                "Next.js",
                "C++",
                "Cybersecurity",
                "VAPT"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
