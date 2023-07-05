import { styled } from "styled-components";

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

export const ContainerQuase =styled.div`
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
    span+ span + span + span{
      background: ${({theme})=>theme.colors.gray[600]};
    }

  }
}
`;

export const FormQuase = styled.div`
width: 600px;
height: 545px;
margin: 0 auto;
border-radius: 6px;
border: 1px solid ${({theme})=>theme.colors.gray[600]};
margin-left: -30px;
background: ${({theme})=>theme.colors.gray[800]};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:16px;

.contInputs{
  width: 90%;
  height: 435px;
  margin: 0 auto;
  border: 1px solid ${({theme})=>theme.colors.gray[600]};

}
#link{
  width: 90%;
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
