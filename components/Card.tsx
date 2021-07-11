import * as React from 'react'
import Link from 'next/Link'

import styles from '../styles/Card.module.css'

interface Props {
  title: string
  route?: string
  link?: string
  children: React.ReactNode
}

const Card = ({ title, route, link, children }: Props) => {
  const cardContent = (
    <>
      <h2>{title} &rarr;</h2>
      {children}
    </>
  )

  return route ? (
    <Link href={route}>
      <a className={styles.card}>{cardContent}</a>
    </Link>
  ) : link ? (
    <a href='#' className={styles.card}>
      {cardContent}
    </a>
  ) : (
    <>{cardContent}</>
  )
}

export default Card
