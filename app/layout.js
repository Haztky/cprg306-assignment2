import "./globals.css";

export const metadata = {
  title: "Web dev assignment",
  description: "Sart of web dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
