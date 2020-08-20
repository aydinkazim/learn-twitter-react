// bu bir ön tanımlı dosya _ ile başladığı için bir sayfa olmayacak
// uygulama ayağa kalkarken yardımcı olur
import React from "react";

import "../styles/app.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
