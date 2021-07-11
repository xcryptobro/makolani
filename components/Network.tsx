import * as React from 'react'
import Image from 'next/image'
import { useWallet } from 'use-wallet'

const Network = () => {
  const wallet = useWallet()

  return wallet.status !== 'connectd' || wallet.chainId !== 137 ? null : (
    <div>
      <Image src='/ui/polygon.svg' width={102.4} height={22.4} />
    </div>
  )
}

export default Network
