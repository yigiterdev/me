import "./globals.css";
import "@/styles/fonts/typography.css";

import {sourceCodePro400} from "@/styles/fonts/fonts";

export const metadata = {
  title: "Ahmet Bugra Yigiter",
  description: "Generated by create next app"
};

function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={sourceCodePro400.className}>{children}</body>
    </html>
  );
}

export default RootLayout;
