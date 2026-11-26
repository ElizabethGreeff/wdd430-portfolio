import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Elizabeth Greeff | Project Portfolio",
    template: "%s | Project Portfolio",
  },
  description: "A portfolio of web development projects by Elizabeth Greeff.",
  metadataBase: new URL("https://wdd430-portfolio-azure.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}