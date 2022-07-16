import React from 'react';

import LayoutPrincipal from '../components/layouts/layoutPrincipal';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <LayoutPrincipal>
            <Component {...pageProps} />
        </LayoutPrincipal>
    );
}
