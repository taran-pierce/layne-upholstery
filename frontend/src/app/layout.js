
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Provider from "../components/Provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Layne Upholstery",
  description: "Come get your upholstery done!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
            {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
