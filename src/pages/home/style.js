import { styled } from "styled-components";

export const  Container = styled.div`
width: 90%;
height: 100%;
margin: 0 auto;
position: relative;
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

export const ConatainerForm = styled.div`
width: 100%;
height: 100%;
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

    span{
      width: 117px;
      height: 4px;
      border-radius: 1px;
      background: ${({theme})=>theme.colors.gray[100]};
    }
    span + span {
      background: ${({theme})=>theme.colors.gray[600]};
    }

  }
}
`;

export const FormDados = styled.form`
margin-top:24px;
width: 600px;
height: 278px;
margin: 0 auto;
border-radius: 6px;
border: 1px solid ${({theme})=>theme.colors.gray[600]};
position: absolute;
left: -5.5%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:16px;
background: ${({theme})=>theme.colors.gray[600]};
span{
  position: absolute;
  top: 24.2%;
  left: 7.5%;
}
label{
  display:block;
  font-size:14px;
  font-weight: 400;
  line-height: 22.4px;
  color: ${({theme})=>theme.colors.gray[100]};
  width: 80%;
  height: 22px;
  margin: 0 auto;
  margin-left: 28px;
  }

  input{
    display:block;
    outline: none;
    border: none;
    width: 90%;
    height: 46px;
    margin: 0 auto;
    border-radius: 6px;
    margin-left: 28px;
    background: ${({theme})=>theme.colors.gray[900]};
    padding: 12px 16px;
    position: relative;
    color:${({theme})=>theme.colors.gray[100]};
    font-size: 16px;
  }
#user{
  padding-left: 13.39999%;
}

#link{
  width: 90%;
  height:46px;
  margin: 0 auto;
  button{
    width: 100%;
    height:46px;
    margin: 0 auto;
    border-radius: 6px;
    font-size:14px;
    font-weight: 500;
    line-height: 22.4px;
    color: ${({theme})=>theme.colors.white};
    background: ${({theme})=>theme.colors.green[600]};
    border:none;
  }

}

`;