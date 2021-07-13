import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { UseWalletProvider } from 'use-wallet'
import theme from '../theme'
import useNetworkPrompt from '../hooks/useNetworkPrompt'

const polygonChainId = 137

const MyApp = ({ Component, pageProps }: AppProps) => {
  useNetworkPrompt()
  return (
    <UseWalletProvider
      chainId={polygonChainId}
      connectors={{
        walletconnect: {
          rpcUrl: `https://polygon-mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`
        }
      }}>
      <Head>
        <title>Makolani</title>
        <meta
          name='description'
          content='Community driven token on the Polygon Network'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest'></link>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider options={{ useSystemColorMode: true }}>
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </UseWalletProvider>
  )
}
export default MyApp
