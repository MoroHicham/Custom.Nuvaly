import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

import { AppProvider } from '@shopify/polaris';
import {Seo} from '@shopify/hydrogen';
import app from './styles/app.css';
import MainLayout from './components/main.layout';
import styles from './styles/tailwind-build.css';


// Describes the css, javascript, icons links - start 
export const links = () => {
  return [
    {rel: 'stylesheet', href: app},
    {rel: 'stylesheet', href: styles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    }
  ];
};
// Describes the css, javascript, icons links - end

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
      <AppProvider>
        {/* Entry Point - start */}
        <MainLayout title={'Nuvaly'}>
          <Outlet />
        </MainLayout>
        {/* Entry Point - start */}
        <ScrollRestoration />
        <Scripts />
        </AppProvider>
      </body>
    </html>
  );
}

