import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google"; // Use next/font/google
import "./globals.css";
import Header from "./components/navbar";
import Footer from "./components/footer";
import Bottom from "./components/bottom";

// Configure Great Vibes font
const greatVibes = Great_Vibes({
  weight: "400", // Specify the font weight if needed
  subsets: ["latin"], // Load specific subsets (e.g., Latin, Cyrillic)
});

// Configure Inter font
const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="max-w-[1920px]">
      <body className={`${inter.className} ${greatVibes.className}`}>
        <Header />
        {children}
        <Footer />
        <Bottom />
      </body>
    </html>
  );
}