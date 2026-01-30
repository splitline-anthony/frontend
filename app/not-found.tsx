import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    // biome-ignore lint/a11y/useHtmlLang: not found page should html tag
    <html>
      <body>
        <main
          style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            padding: "6rem 1.5rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "3.75rem",
                fontWeight: "bold",
                color: "#4f46e5",
                margin: 0,
              }}
            >
              404
            </p>
            <h1
              style={{
                marginTop: "1rem",
                fontSize: "1.875rem",
                fontWeight: "bold",
                letterSpacing: "-0.025em",
                color: "#111827",
              }}
            >
              Page not found
            </h1>
            <p
              style={{
                marginTop: "1.5rem",
                fontSize: "1rem",
                lineHeight: "1.75rem",
                color: "#4b5563",
                maxWidth: "28rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Sorry, we couldn’t find the page you’re looking for. Perhaps
              you’ve mistyped the URL or the page has been moved.
            </p>
            <div
              style={{
                marginTop: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.5rem",
              }}
            >
              <Link
                href="/"
                style={{
                  borderRadius: "9999px",
                  backgroundColor: "#4f46e5",
                  padding: "0.75rem 2rem",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#ffffff",
                  textDecoration: "none",
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  transition: "background-color 0.2s",
                }}
              >
                Go back home
              </Link>
              <Link
                href="/contact"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#111827",
                  textDecoration: "none",
                }}
              >
                Contact support <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
