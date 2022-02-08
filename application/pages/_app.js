import '../assets/styles/global.css';
import 'react-circular-progressbar/dist/styles.css';
import { MiscProvider } from '../context/MiscContext';
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <MiscProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </MiscProvider>
  );
}

export default MyApp;
