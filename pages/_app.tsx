import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        autoClose={2000}
        draggable={true}
        closeOnClick
        hideProgressBar
        newestOnTop
        theme="dark"
        position="bottom-center"
      />
    </>
  );
}
