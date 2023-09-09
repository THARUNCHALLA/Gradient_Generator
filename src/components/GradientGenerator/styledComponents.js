import styled from 'styled-components'

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: white;
`
export const Container = styled.div`
  background-image: ${props => props.bg_color};
  height: 100vh;
  width: 100vw;
  border: solid 1px #334155;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: white;
`
export const Unordered = styled.ul`
  font-family: 'Roboto';
  display: flex;
  flex-wrap: wrap;
`
export const Heading1 = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: white;
`
export const Button = styled.button`
  height: 28px;
  border-radius: 04px;
  width: 80px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #00c9b7;
  margin-top: 16px;
`
export const Input = styled.input`
  width: 80px;
  height: 40px;
  outline: none;
  background-color: transparent;
  border: none;
  margin-left: 20px;
`
export const Container1 = styled.div`
  margin: 10px;
  display: flex;
`
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: white;
`
