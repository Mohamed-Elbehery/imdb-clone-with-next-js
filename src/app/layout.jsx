import { Header, Navbar, SearchBox } from "@/components";
import Providers from "./Providers";
import "./globals.css";

export const metadata = {
  title: "IMDb Clone",
  description: "Generated by create next app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* Search Box */}
          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  );
}
