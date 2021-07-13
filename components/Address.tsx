import { useWallet } from 'use-wallet'
import { Button } from '@chakra-ui/react'

const Address = () => {
  const wallet = useWallet()
  return !wallet.account ? null : (
    <div>
      <Button
        as={Button}
        mr={4}
        href='#'
        size='sm'
        rounded={'full'}
        cursor={'pointer'}
        colorScheme='pink'>
        <code>
          {`${wallet.account.substr(0, 6)}...${wallet.account.substr(38)}`}
        </code>
      </Button>
    </div>
  )
}

export default Address
