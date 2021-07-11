import Card from './Card'
import styles from '../styles/Card.module.css'

const CardGrid = () => {
  return (
    <div className={styles.grid}>
      <Card title='About Us' route='/about'>
        <p>We want you to be part of our community. Learn about us.</p>
      </Card>

      <Card title='Tokenomics' route='/tokenomics'>
        <p>We have our own token! Learn all about MAKO token.</p>
      </Card>

      <Card title='NFTs' route='/nft'>
        <p>Preview RabionAlpha: the first NFT collection from makolani.</p>
      </Card>

      <Card title='Polygon' route='/polygon'>
        <p>All about how to geet started on the Polygon network.</p>
      </Card>
    </div>
  )
}

export default CardGrid
