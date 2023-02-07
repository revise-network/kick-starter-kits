import React, { useEffect, useState } from 'react'

import {
  Container,
  Content,
  List,
  ListItem,
  Title,
  Description,
} from './styles'
import Header from '../../components/Header'
import NFTViewer from '../../components/NFTViewer'
import axios from 'axios'
import abi from '../../artifacts/contracts/DynamicNFT.sol/DynamicNFT.json'

const GetStarted = () => {
  const [loading, setLoading] = useState(null)

  const [NFTs, setNFTs] = useState([])
  const loadNFTs = () => {
    axios
      .get(`/api/revise/nfts`)
      .then((result) => {
        const { data } = result
        setNFTs(data)
      })
      .catch((err) => {
        console.log({ err })
      })
  }
  //Loads All the NFTs from the user Account on the Mount
  useEffect(() => {
    loadNFTs()
  }, [])

  //Loads a single NFT
  const [NFT, setNFT] = useState(null)
  const loadNFT = (nftID) => {
    setLoading(true)
    axios
      .get(`/api/revise/nfts/${nftID}`)
      .then((result) => {
        const { data } = result
        setNFT(data)
        setLoading(false)
      })
      .catch((err) => {
        console.log({ err })
        setLoading(false)
      })
  }

  const handleMint = () => {}
  return (
    <Container>
      <Header />
      <Content>
        <h1>Say Hello to Dynamic NFTs in your Next.js Apps!</h1>
        <div style={{ display: 'flex' }}>
          {NFTs.length > 0 && (
            <List>
              <h3>Your NFTs</h3>
              {NFTs.map((nft) => (
                <ListItem key={nft.id} onClick={() => loadNFT(nft.id)}>
                  <Title>{nft.name}</Title>
                  <Description>{nft.description}</Description>
                </ListItem>
              ))}
            </List>
          )}
          <div style={{ width: '50%', margin: '20px' }}>
            <NFTViewer NFT={NFT} loading={loading} handleMint={handleMint} />
          </div>
        </div>
      </Content>
    </Container>
  )
}

export default GetStarted
