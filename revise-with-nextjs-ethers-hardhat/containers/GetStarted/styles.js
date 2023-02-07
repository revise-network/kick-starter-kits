import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 50%;
  overflow-y: auto;
`

export const ListItem = styled.div`
  padding: 5px;
  cursor: pointer;
  margin-bottom: 5px;
  border-radius: 10px;
  border-bottom: 1px dotted black;
  /* :nth-child(odd) {
    background-color: #edfcfc;
  } */
  :hover {
    -webkit-box-shadow: 0px 10px 18px -9px rgba(173, 173, 173, 1);
    -moz-box-shadow: 0px 10px 18px -9px rgba(173, 173, 173, 1);
    box-shadow: 0px 10px 18px -9px rgba(173, 173, 173, 1);
  }
`

export const Title = styled.div`
  font-size: 20px;
`
export const Description = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
`
