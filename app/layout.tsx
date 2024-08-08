import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden hide-scrollbar w-screen h-fit min-h-screen">
        {children}
      </body>
    </html>
  );
}
