// import '../styles/globals.css'
import './global.css';
// End-point for updating pages before rendering...
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

export default function MyApp ({Component, pageProps}) {
  console.log("Hello from _app");
  return (
    <Component {...pageProps} />
  )
}
