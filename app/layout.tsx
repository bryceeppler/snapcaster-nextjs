/* eslint-disable @next/next/no-head-element */
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/single">
            <a>Singles</a>
          </Link>
          <Link href="/multi">
            <a>Multi-search</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
