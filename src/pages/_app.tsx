import React from 'react';

//  import LayoutPrincipal from '../components/layouts/layoutPrincipal';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    {
        /**
        <LayoutPrincipal>
            <Component {...pageProps} />
        </LayoutPrincipal>
    */
    }
    return <Component {...pageProps} />;
}
