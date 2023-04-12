import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";
import Head from 'next/head';
import axios from "axios";

axios.interceptors.response.use(function (response) {

  return response;

}, function (error) {
  if (error?.response?.status === 401) {
    removeAuth();
  }
  return Promise.reject(error);
});


function MyApp({ Component, pageProps, router }) {


  return (
    <>
      <Head>
         <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0" />
         <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,700;1,400&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200&family=Oswald:wght@700&display=swap');
          </style>
     </Head>
     <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);

