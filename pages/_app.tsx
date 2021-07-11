import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { UseWalletProvider } from 'use-wallet'
import theme from '../theme'
import useNetworkPrompt from '../hooks/useNetworkPrompt'

const polygonChainDecimal = 137
const polygonChainId = `0x${polygonChainDecimal.toString(16)}`

const MyApp = ({ Component, pageProps }: AppProps) => {
  useNetworkPrompt()
  return (
    <UseWalletProvider
      chainId={137}
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
        <link rel='icon' href='/favicon.ico' />
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
