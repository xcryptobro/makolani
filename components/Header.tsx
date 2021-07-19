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
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import Address from './Address'
import Network from './Network'
import { useRouter } from 'next/router'

interface ILink {
  path: string
  en: string
  jp: string
}

const Links: ILink[] = [{ path: '/', en: 'Home', jp: 'ホーム' }]

const Header = () => {
  const wallet = useWallet()
  const { locale } = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const hoverStyle = {
    textDecoration: 'none',
    bg: useColorModeValue('gray.200', 'gray.700')
  }

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
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link
                  key={link.en}
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={hoverStyle}
                  href={link.path}>
                  {locale === 'jp' ? link.jp : link.en}
                </Link>
              ))}
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
                <MenuButton
                  as={Button}
                  mr={4}
                  href='#'
                  size='sm'
                  rounded={'full'}
                  cursor={'pointer'}
                  colorScheme='pink'
                  leftIcon={<AddIcon />}
                  onClick={() => wallet.connect()}>
                  {locale === 'jp'
                    ? 'MetaMaskとつながる'
                    : 'Connect w/ MetaMask'}
                </MenuButton>
              )}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link
                  key={link.en}
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={hoverStyle}
                  href={link.path}>
                  {locale === 'jp' ? link.jp : link.en}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default Header
