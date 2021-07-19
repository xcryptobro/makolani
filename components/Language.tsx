import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react'

interface ILang {
  name: string
  locale: string
}

const Language = () => {
  const { locale } = useRouter()
  const langs: ILang[] = [
    { name: 'ENG', locale: 'en-US' },
    { name: '日本語', locale: 'jp' }
  ]
  const other = langs.find((lang) => lang.locale !== locale)
  return (
    <>
      {other && (
        <Link href='/' locale={other.locale}>
          <Button
            mr={4}
            href='#'
            size='sm'
            rounded={'full'}
            cursor={'pointer'}
            colorScheme='gray'>
            {other.name}
          </Button>
        </Link>
      )}
    </>
  )
}

export default Language
