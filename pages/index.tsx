import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { useWallet } from 'use-wallet'
import Image from 'next/image'
import TokenAmount from 'token-amount'
import Mako from '../components/Mako'
import Header from '../components/Header'

const Home = () => {
  const wallet = useWallet()
  const blockNumber = wallet.getBlockNumber()

  return (
    <Box as='section' backgroundColor='#fefefe'>
      <Header />
      <Box
        maxW='2xl'
        mx='auto'
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
        textAlign='center'>
        <Heading as='h2' size='3xl' color='gray'>
          Welcome to Makolani
        </Heading>
        <Text mt='4' fontSize='lg'>
          Our community is learning about crypto and DeFi on Polygon!
        </Text>
        {wallet.status === 'connected' ? (
          <Box>
            <Text mt='4' fontSize='lg'>
              {TokenAmount.format(wallet.balance, 18, { symbol: 'MATIC' })}
            </Text>
            <Mako />
            <Button
              mt='8'
              as='a'
              href='#'
              size='lg'
              colorScheme='blue'
              fontWeight='bold'
              onClick={() => wallet.reset()}>
              Disconnect
            </Button>
          </Box>
        ) : (
          <Button
            mt='8'
            as='a'
            href='#'
            size='lg'
            colorScheme='pink'
            fontWeight='bold'
            onClick={() => wallet.connect()}>
            Connect w/ MetaMask
          </Button>
        )}
        <Box>
          <Image src='/mako.svg' alt='MAKO Token' width={200} height={200} />
        </Box>
        {wallet.connected && (
          <Text mt='4' fontSize='lg'>
            Block:{blockNumber || '…'}
          </Text>
        )}
      </Box>
    </Box>
  )
}

export default Home
