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

export const ContainerDisp= styled.div`
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
    span + span + span + span+span{
      background: ${({theme})=>theme.colors.gray[600]};
    }

  }
}

`;


export const FormDisp = styled.form`
width: 600px;
height:auto;
margin: 0 auto;
margin-left: -30px;
border-radius: 6px;
border: 1px solid ${({theme})=>theme.colors.gray[600]};
background: ${({theme})=>theme.colors.gray[800]};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:10px;
padding: 30px;
p{
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color:${({theme})=>theme.colors.gray[200]};
}
.descri{
  margin-top: 2px;
  margin-bottom: 16px;
}
textarea{
  resize: none;
  outline: none;
  width: 100%;
  height: 120px;
  padding: 12px 16px;
  background:  ${({theme})=>theme.colors.gray[900]};
  border: none;
  border-radius: 6px;
}
button{
  border-radius: 6px;
  padding: 12px 191px;
  height: 46px;
  width:100%;
  color:${({theme})=>theme.colors.gray[100]};
  background: ${({theme})=>theme.colors.green[600]};
  border: none;
  
  
}


`;