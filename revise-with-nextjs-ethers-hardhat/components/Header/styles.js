import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 60px;
  border: 1px dotted darkblue;
  margin: 10px;
  align-items: center;
  padding: 5px 50px 5px 50px;
  justify-content: space-between;
  border-radius: 10px;
  width: 90%;
`
export const ConnectButton = styled.button`
  background: none;
  border: 1px solid green;
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
`
export const DisconnectButton = styled.button`
  background: none;
  border: 1px solid red;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
`
