import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Space_Mono } from "@next/font/google";
import { ThemeProvider } from "next-themes";

const monoSpace = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className={`${monoSpace.className}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
