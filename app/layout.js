import "./globals.css";

export const metadata = {
  title: "Age-adjusted D-dimer",
  description: "Age-adjusted D-dimer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
