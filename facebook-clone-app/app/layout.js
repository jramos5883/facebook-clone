import "./globals.css";
import AuthSesProvider from "./authSesProvider";

export default function RootLayout({ children }) {
  return (
    <AuthSesProvider>
      <html lang="en">
        <body className="">{children}</body>
      </html>
    </AuthSesProvider>
  );
}
