import { Box, Button, Text } from '@chakra-ui/react'
import { useWallet } from 'use-wallet'
import Image from 'next/image'
import { useRouter } from 'next/router'
import TokenAmount from 'token-amount'
import Mako from '@/components/Mako'

const Home = () => {
  const router = useRouter()
  const { locale } = router
  const wallet = useWallet()

  return (
    <>
      {wallet.status === 'connected' ? (
        <>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            my={4}>
            <Text fontSize='lg'>{TokenAmount.format(wallet.balance, 18)}</Text>
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
            {locale === 'jp' ? 'MetaMaskとつながる' : 'Connect w/ MetaMask'}
          </Button>
          <Image
            src='/tokens/mako.svg'
            alt='MAKO Token'
            width={200}
            height={200}
          />
        </Box>
      )}
    </>
  )
}

export default Home
