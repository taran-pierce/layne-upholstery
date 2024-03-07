
import { Prompt } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Provider from "../components/Provider";

import "./globals.css";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ['100', '300', '400', '600', '800']
});

export const metadata = {
  title: "Layne Upholstery",
  description: "Come get your upholstery done!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <Provider>
          <Header />
            {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
