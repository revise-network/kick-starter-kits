import { Container, Image, Details, Property, Mint } from './styles'
import Loading from '../Loading'
const NFTViewer = ({ NFT, loading, handleMint }) => {
  if (loading) {
    return <Loading />
  }
  if (!NFT) return <></>
  return (
    <div>
      <Container>
        <Image>
          <img src={NFT?.image} />
        </Image>
        <Details>
          <div>
            <a
              href={`https://app.revise.network/revisions/${NFT.id}`}
              target="_blank"
            >
              View on Revise
            </a>
          </div>
          <Property>
            <span>Name: </span>
            {NFT?.name}
          </Property>
          <Property>
            {' '}
            <span>Description: </span> {NFT?.description}
          </Property>
          <Property>
            {' '}
            <span>ID: </span> {NFT?.id}
          </Property>
          <Property>
            {' '}
            <span>TokenId: </span> {NFT?.tokenId}
          </Property>

          <Mint onClick={handleMint}>Mint on Chain</Mint>
        </Details>
      </Container>
    </div>
  )
}

export default NFTViewer
