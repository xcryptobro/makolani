import * as React from 'react'

// declare global {
//   interface Window {
//     ethereum: any
//   }
// }

const polygonChainDecimal = 137
const polygonChainId = `0x${polygonChainDecimal.toString(16)}`

const useNetworkPrompt = () => {
  const [networkPrompt, setNetworkPrompt] = React.useState(false)
  const { ethereum } = typeof window !== 'undefined' && (window as any)

  const connectToNetwork = async (provider: any) => {
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: polygonChainId,
          chainName: 'Polygon Mainnet',
          nativeCurrency: {
            name: 'Matic',
            symbol: 'MATIC',
            decimals: 18
          },
          rpcUrls: [
            'https://rpc-mainnet.matic.network',
            'https://rpc-mainnet.maticvigil.com',
            'https://rpc-mainnet.matic.quiknode.pro',
            'https://matic-mainnet.chainstacklabs.com',
            'https://matic-mainnet-full-rpc.bwarelabs.com',
            'https://matic-mainnet-archive-rpc.bwarelabs.com'
          ],
          blockExplorerUrls: ['https://polygonscan.com/']
        }
      ]
    })
  }

  React.useEffect(() => {
    if (!networkPrompt) {
      console.log(ethereum)
      if (ethereum && ethereum.networkVersion !== 137) {
        connectToNetwork(ethereum)
        setNetworkPrompt(true)
      }
    }
  }, [networkPrompt, ethereum])
}

export default useNetworkPrompt
