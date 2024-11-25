import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "CarFix-Pro",
    template: "%s | carfix-pro"
  },
  description: "Service details page for Carfix-pro"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carfixtheme">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ToastContainer />
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>

    </html>
  );
}
