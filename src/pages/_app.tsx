import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import '../styles/index.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider storageKey="preferred-theme" attribute="class">
      <DefaultSeo
        defaultTitle="Arnab Tarwani - An artist, developer and a human the making."
        titleTemplate="%s | Arnab Tarwani"
        description="Arnab Tarwani - An artist, developer and a human in the making."
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;