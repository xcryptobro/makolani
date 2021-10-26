import { Box, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import * as React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { locale } = useRouter()

  return (
    <>
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
            {locale === 'jp'
              ? 'このコミュニティは、Polygonで暗号通貨とDeFiについて勉強しているところです。'
              : 'Our community is learning about crypto and DeFi on Polygon!'}
          </Text>
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Layout
