import * as React from 'react'
import { useWallet } from 'use-wallet'
import ERC20 from '../utils/ERC20'
import useTokenBalance from "../hooks/useTokenBalance";
import makoToken
const makoAddress = '0x7c6B981c395f8dE68809E6c713B921e51eB1ac5B'

const Token = () => {
  const wallet = useWallet()
  const [makoBalance, setMakoBalance] = React.useState<number>(0.0)
  
  const displayMakoBalance = React.useMemo(() => getDisplayBalance(makoBalance), [makoBalance]);

  React.useEffect(() => {
    if (wallet.account) {
      const MAKO = new ERC20(makoAddress,)
      const makoBalance = useTokenBalance(MAKO, wallet.account);
    }
  }, [wallet])
  return (
    {wallet.account && (

    )}
  )
}

export default Token