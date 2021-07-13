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
          <>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              my={4}>
              <Text fontSize='lg'>
                {TokenAmount.format(wallet.balance, 18)}
              </Text>
              <Box p={2}>
                <Image
                  src='/tokens/matic.svg'
                  width={40}
                  height={40}
                  alt='MATIC'
                />
              </Box>
              <Text fontSize='lg'>MATIC</Text>
            </Box>
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
          </>
        ) : (
          <Box display='flex' flexDirection='column'>
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
            <Image
              src='/tokens/mako.svg'
              alt='MAKO Token'
              width={200}
              height={200}
            />
          </Box>
        )}
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
