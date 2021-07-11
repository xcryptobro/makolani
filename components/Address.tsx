import { useWallet } from 'use-wallet'

const Address = () => {
  const wallet = useWallet()
  return !wallet.account ? null : (
    <div>
      <code>
        {`${wallet.account.substr(0, 6)}...${wallet.account.substr(38)}`}
      </code>
    </div>
  )
}

export default Address
