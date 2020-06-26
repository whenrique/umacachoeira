import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  margin: auto;
  text-align: center;
`

export const Heading = styled.h1`
  width: 45%;
  font-size: 1.5rem;
`
export const Strong = styled.strong`
  color: #f00;
`

export const Waterfall = styled.div`
  text-align: left;
  padding: 30px;
`

export const WaterfallPic = styled.img`
  max-width: 100%;
  border: 5px solid #fff;
`

export const Button = styled.button`
  border: 0;
  background-color: #f00;
  color: #fff;
  width: 70px;
  height: 30px;
  line-height: 30px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 1rem;
`