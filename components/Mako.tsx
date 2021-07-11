import * as React from 'react'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import { useWallet } from 'use-wallet'
import { makoToken } from '../abi/makoToken'
import TokenAmount from 'token-amount'

const makoAddress = '0x7c6B981c395f8dE68809E6c713B921e51eB1ac5B'
const Mako = () => {
  const { ethereum } = typeof window !== 'undefined' && (window as any)
  const wallet = useWallet()
  const [balance, setBalance] = React.useState(0)
  const { current: web3 } = React.useRef(new Web3(ethereum))

  React.useEffect(() => {
    const getBalance = async () => {
      const tokenInst = new web3.eth.Contract(
        makoToken as AbiItem[],
        makoAddress
      )
      const balance = await tokenInst.methods.balanceOf(wallet.account).call()
      setBalance(balance)
    }
    getBalance()
  }, [])

  return (
    <div>
      <p>Balance: {TokenAmount.format(balance, 18, { symbol: 'MAKO' })}</p>
    </div>
  )
}

export default Mako
