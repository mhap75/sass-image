import RootProvider from "@/components/providers";
import { cn } from "@/library/utils";
import { IReadOnlyChildren } from "@/types/types";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.scss";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "block",
});

export const metadata: Metadata = {
  title: "SAAS Image",
  description: "Image Generative AI Software",
};

export default function RootLayout({ children }: IReadOnlyChildren) {
  return (
    <RootProvider>
      <html lang="en">
        <body className={cn("antialiased", IBMPlex.variable)}>{children}</body>
      </html>
    </RootProvider>
  );
}
