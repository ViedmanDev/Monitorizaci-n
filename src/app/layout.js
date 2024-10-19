import "./global.css"

export const metadata = {
  title: "Monitorización",
  description: "¡Ejerzamos control político!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="spa">
      <body>{children}</body>
    </html>
  );
}