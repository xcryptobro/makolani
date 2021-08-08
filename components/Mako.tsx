import * as React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import { useWallet } from 'use-wallet'
import { makoToken } from '../abi/makoToken'
import TokenAmount from 'token-amount'
import Image from 'next/image'
import { useRouter } from 'next/router'

const makoAddress = '0x7c6B981c395f8dE68809E6c713B921e51eB1ac5B'
const Mako = () => {
  const { ethereum } = typeof window !== 'undefined' && (window as any)
  const wallet = useWallet()
  const [balance, setBalance] = React.useState(0)
  const { current: web3 } = React.useRef(new Web3(ethereum))
  const { locale } = useRouter()

  React.useEffect(() => {
    const getBalance = async () => {
      const tokenInst = new web3.eth.Contract(
        makoToken as AbiItem[],
        makoAddress
      )
      const balance = await tokenInst.methods.balanceOf(wallet.account).call()
      setBalance(balance)
    }
    getBalance()
  }, [wallet, web3])

  return (
    <Box display='flex' flexDirection='column' alignContent='space-around'>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Text fontSize='lg'>{TokenAmount.format(balance, 18)}</Text>
        <Box m={2}>
          <Image src='/tokens/mako.svg' width={60} height={60} alt='MAKO' />
        </Box>
        <Text fontSize='lg'>MAKO</Text>
      </Box>
      {balance > 0 && (
        <Text fontSize='lg'>
          {locale === 'jp' ? 'Hello、HODLER' : 'Hey there hodler'} 💎🙌!
        </Text>
      )}
    </Box>
  )
}

export default Mako
