import { useCallback, useEffect, useState } from 'react'
import { BigNumber } from 'ethers'
import ERC20 from '../utils/ERC20'

const useTokenBalance = (token: ERC20, account: string) => {
  const [balance, setBalance] = useState(BigNumber.from(0))

  const fetchBalance = useCallback(async () => {
    setBalance(await token.balanceOf(account))
  }, [token, account])

  useEffect(() => {
    fetchBalance().catch((err) =>
      console.error(`Failed to fetch token balance: ${err.stack}`)
    )
    let refreshInterval = setInterval(fetchBalance, 10000)
    return () => clearInterval(refreshInterval)
  }, [token, fetchBalance])

  return balance
}

export default useTokenBalance
