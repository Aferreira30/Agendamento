import styled from "styled-components";

export const Container = styled.div`
width:100%;
height: auto;

.react-calendar{
  width: 540px;
 max-width: 100%;
 background-color: ${({theme})=>theme.colors.gray[800]};
 color: ${({theme})=>theme.colors.gray[200]};
 font-size: 14px;
 border-radius: 6px;
 font-weight: 500;
line-height: 160%;
padding: 24px;
border:1px solid  ${({theme})=>theme.colors.gray[600]};
}
.react-calendar__navigation button{
  color: ${({theme})=>theme.colors.gray[200]};
  text-transform: capitalize;
  font-weight: bold;
 background: transparent;
 font-weight: 500;
  line-height: 160%;
  font-size: 16px;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background: ${({theme})=>theme.colors.gray[600]};
}
.react-calendar__navigation button[disabled] {
 background-color: #f0f0f0;
}
abbr[title] {
  text-decoration:none;
}
.react-calendar__month-view__days__day--weekend {
 color: #fff;
 font-weight: 400;
line-height: 160%;
font-size: 16px;
text-align: center;
}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
 background:  ${({theme})=>theme.colors.gray[600]};
 color: ${({theme})=>theme.colors.gray[200]};
 border-radius: 6px;
}
.react-calendar__tile{
  color: #fff;
 font-weight: 400;
line-height: 160%;
font-size: 16px;
text-align: center;
padding: 16px 26px;
border-radius: 6px;

}
.react-calendar__tile--now {
  background: transparent;
 color:#fff;
}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  background:  ${({theme})=>theme.colors.gray[600]};
 color: ${({theme})=>theme.colors.gray[200]};
 border-radius: 6px;
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background:  ${({theme})=>theme.colors.gray[600]};
 color: ${({theme})=>theme.colors.gray[200]};
}
.react-calendar__tile--active{
  background:  ${({theme})=>theme.colors.gray[600]};
 color: ${({theme})=>theme.colors.gray[200]};
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background:  ${({theme})=>theme.colors.gray[600]};
 color: ${({theme})=>theme.colors.gray[200]};
}
.react-calendar--selectRange .react-calendar__tile--hover {
  background:  ${({theme})=>theme.colors.gray[600]};
}
.react-calendar__tile--range{
  background:  ${({theme})=>theme.colors.gray[600]};
  color: ${({theme})=>theme.colors.gray[200]};
}
.react-calendar__tile--rangeStart{
  background:  ${({theme})=>theme.colors.gray[600]};
  color: ${({theme})=>theme.colors.gray[200]};
}
.react-calendar__tile--rangeEnd{
  background:  ${({theme})=>theme.colors.gray[600]};
  color: ${({theme})=>theme.colors.gray[200]};
}
.react-calendar--selectRange{
  background:  ${({theme})=>theme.colors.gray[600]};
  color: ${({theme})=>theme.colors.gray[200]};
}
`;