import Language from './Language'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useWallet } from 'use-wallet'
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const Footer = () => {
  const wallet = useWallet()
  const blockNumber = wallet.getBlockNumber()
  const { locale } = useRouter()

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Box>
          <Image src='/mako.png' alt='MAKO Token' width={50} height={50} />
        </Box>
        <Language />
        <Text>Built in {new Date().getFullYear()} by Makolani.</Text>
        <Text mt='4' fontSize='lg'>
          {locale === 'jp' ? 'ブロック' : 'Block'}: {blockNumber || '…'}
        </Text>
        <Stack direction={'row'} spacing={6}></Stack>
      </Container>
    </Box>
  )
}

export default Footer
