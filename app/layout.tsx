import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/opengraph-image.png"
    />
      <title>Acme Dc</title>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}