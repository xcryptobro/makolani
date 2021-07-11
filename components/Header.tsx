// import * as React from 'react'
// import { ConnectionRejectedError, useWallet } from 'use-wallet'
// import TokenAmount from 'token-amount'
// import Address from './Address'
// import Network from './Network'

// const Header = () => {
//   const wallet = useWallet()
//   const blockNumber = wallet.getBlockNumber()
//   const [walletError, setWalletError] = React.useState<string>('')

//   React.useEffect(() => {
//     console.log(wallet)
//   }, [wallet])

//   React.useEffect(() => {
//     if (wallet.error?.name) {
//       const err =
//         wallet.error instanceof ConnectionRejectedError
//           ? 'Connection declined.'
//           : wallet.error.name === 'ChainUnsupportedError'
//           ? 'Please switch to the Polygon Network.'
//           : wallet.error.name
//       setWalletError(err)
//     }
//   }, [wallet])

//   return (
//     <>
//       <Address />
//       <Network />
//       {wallet.status === 'connected' ? (
//         <p>
//           <span>Connected.</span>
//           <button onClick={() => wallet.reset()}>Disconnect</button>
//         </p>
//       ) : wallet.status === 'connecting' ? (
//         <p>
//           <span>Connecting to {wallet.connector}…</span>
//           <button onClick={() => wallet.reset()}>Cancel</button>
//         </p>
//       ) : walletError !== '' ? (
//         <p>
//           <p>{walletError}</p>
//           <button onClick={() => wallet.reset}>Retry Connection</button>
//         </p>
//       ) : (
//         <div>
//           Connect:
//           <button onClick={() => wallet.connect()}>MetaMask</button>
//         </div>
//       )}

//       {wallet.account && (
//         <p>
//           <span>Balance:</span>
//           <span>
//             {wallet.balance === '-1'
//               ? '…'
//               : TokenAmount.format(wallet.balance, 18, { symbol: 'MATIC' })}
//           </span>
//         </p>
//       )}
//     </>
//   )
// }

// export default Header

import { ReactNode } from 'react'
import { useWallet } from 'use-wallet'
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react'
import Image from 'next/image'
import { HamburgerIcon, CloseIcon, AddIcon, MinusIcon } from '@chakra-ui/icons'
import Address from './Address'
import Network from './Network'

// const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700')
    }}
    href={'#'}>
    {children}
  </Link>
)

export default function withAction() {
  const wallet = useWallet()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image src='/mako.png' alt='MAKO Token' width={50} height={50} />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              {wallet.status === 'connected' ? (
                <>
                  <Address />
                  <Network />
                </>
              ) : (
                <Button
                  as={Button}
                  mr={4}
                  href='#'
                  size='sm'
                  rounded={'full'}
                  cursor={'pointer'}
                  colorScheme='pink'
                  leftIcon={<AddIcon />}
                  onClick={() => wallet.connect()}>
                  Connect w/ MetaMask
                </Button>
              )}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
