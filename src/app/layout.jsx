import "./globals.css";

export const metadata = {
  title: "Kwun Hei Ching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-primary">{children}</body>
    </html>
  );
}
