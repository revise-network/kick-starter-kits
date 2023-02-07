import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'
import { injected } from '../../helpers/connector'
import { Container, ConnectButton, DisconnectButton } from './styles'

const Header = () => {
  //Connect wallet, for the use of being able to mint.
  const {
    active,
    account,
    library,
    connector,
    activate,
    deactivate,
  } = useWeb3React()

  const connect = async () => {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  const disconnect = async () => {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  //Connect wallet on load
  useEffect(() => {
    // connect()
  }, [])

  return (
    <Container>
      <div>Full stack starter kit</div>
      <div>
        {!active ? (
          <ConnectButton onClick={connect}>Connect your Wallet</ConnectButton>
        ) : (
          <div>
            <span>
              Connected with <b>{account}</b>
            </span>
            <DisconnectButton onClick={disconnect}>Disconnect</DisconnectButton>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Header
