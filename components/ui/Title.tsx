import * as React from 'react'
import { Heading } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return <Heading>{children}</Heading>
}

export default Title
