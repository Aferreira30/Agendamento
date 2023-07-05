import styled from "styled-components";

export const Container = styled.div`
width: 90%;
height: 100%;
margin: 0 auto;
h1{
  font-weight: 700;
  font-size: 24px;
  line-height: 38.4px;
}
p{
  margin-top: 20px;
  width: 100%;
  font-weight: 400;
  line-height: 25.6px;
  color: ${({theme})=>theme.colors.gray[200]};
}
`;

export const ContainerAgenda = styled.div`
width: 100%;
height: auto;
margin: 0 auto;
.contPasso{
  display: grid;
  align-items: center;
  gap: 5px;
  margin-bottom: 24px;

  p{
    width: 80%;
    grid-column: 1 span;
    font-size: 12px;
    font-weight: 400;
    line-height: 19.6px;
    color: ${({theme})=>theme.colors.gray[200]};
  }

  .contSpan{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    width: 97.5%;
    position: relative;
    span{
      width: 117px;
      height: 4px;
      border-radius: 1px;
      background: ${({theme})=>theme.colors.gray[100]};
    }
    span + span + span{
      background: ${({theme})=>theme.colors.gray[600]};
    }

  }
}

`;

export const FormAgenda = styled.form`
width: 600px;
height: 180px;
margin: 0 auto;
margin-left: -30px;
border-radius: 6px;
border: 1px solid ${({theme})=>theme.colors.gray[600]};
background: ${({theme})=>theme.colors.gray[800]};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:16px;

.contLink{
    border: 1px solid ${({theme})=>theme.colors.gray[600]};
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    border-radius: 6px;
    
    h3{
        font-weight: 500;
        font-size: 16px;
        line-height: 25.6px;
        color: ${({theme})=>theme.colors.gray[100]};
        width: 110px;
    }
    a{
      text-decoration: none;
      width: 113px;
      height: 38px;
      text-align: center;
      color:${({theme})=>theme.colors.green[600]};
      font-weight: 500;
        font-size: 14px;
        line-height: 22.6px;
        border: 2px solid ${({theme})=>theme.colors.green[600]};
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
#ajustardiasehorarios{
  width: 90%;
  height: 46px;
  margin: 0 auto;
  button{
    width: 100%;
    height: 46px;
    margin: 0 auto;
    background: ${({theme})=>theme.colors.green[600]};
    border:none;
    border-radius: 6px;
    color:${({theme})=>theme.colors.white};
  }

}
`;