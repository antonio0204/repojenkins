  
import styled from "styled-components"

export const CardContainer = styled.div`
  .ant-card-body {
     padding: 0;
    width: 200px;
    height: 250px;
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  }

 .ant-card-bordered {
    padding: 40px;
    border-radius: 10px;
    background-color: white;
    border: 0;
    color: var(--white);
    width: 200px;
    height:250px;
    text-align:center;
    align-items: center;
  }

 
  a.ant-typography,
  .ant-typography a,
  a {
    color: var(--white);
    text-decoration: underline;
    &:hover {
      color: var(--white);
    }
  }
`


export const CardAnt = styled.div`
background: white;
padding: 40px;
width: 350px;
height:340px;
border-radius: 15px;
background: white;

text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
float:right;

`
export const CardTitle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  
  
 
  .ant-typography {
    color: var(--white);
  }
`
export const Title = styled.div`
 align-items: center;
 
 font-weight: bold;
 `

export const Text = styled.div`
align-items: center;

`