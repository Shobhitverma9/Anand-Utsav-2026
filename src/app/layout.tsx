import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ananda Utsav 2026 – Register Now",
  description:
    "Ananda Utsav 2026 – Formula for the Happy Family. Join us on 25 Dec 2026, 4 PM–9 PM at Golden Rivaah Banquet Hall, Indirapuram.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
