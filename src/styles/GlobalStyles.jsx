import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
    }
    html{
        /* overflow:hidden; */
    }
     // Basic Settings
    body{
        font-family: 'Noto Sans KR',SpoqaHanSans,'Spoqa Han Sans Neo', sans-serif;
        /* font-family:  NotoSansCJKkr; */
        font-size: 22px; // 
        overflow-x:hidden;
       
    }
    .SpoqaHanSans{
        ${Theme.SpoqaHanSans}
    }
    .NotoSans{
        ${Theme.NotoSans}
    }



    a {
        color:${(props) => props.theme.blackColor};
        text-decoration:none;
        cursor:pointer;
    }
    input:focus{
        outline:none;
    }
    // import global mixins 
    ${Theme.checkbox}
    ${Theme.range};
    /* custom badge */
    /* .levelBadge{
        ${Theme.LevelBadge};
    } */
    /* color  */
    .mainColor{
        ${Theme.ColorMain};
    }
    .grayColor{
        ${Theme.GrayColor1};
    }
    /* emphasis */
    strong{
        font-weight:500;
    }
    /* text truncat */
    .truncate{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    /* width, height */
    .w1{
        width:10%;
    }
    .w2{
        width:20%;
    }
    .w3{
        width:30%;
    }
    .w4{
        width:40%;
    }
    .w5{
        width:50%;
    }
    .w6{
        width:60%;
    }
    .w7{
        width:70%;
    }
    .w8{
        width:80%;
    }
    .w9{
        width:90%;
    }
    .w10{
        width:100%;
    }
    .h1{
        height:10%;
    }
    .h2{
        height:20%;
    }
    .h3{
        height:30%;
    }
    .h4{
        height:40%;
    }
    .h5{
        height:50%;
    }
    .h6{
        height:60%;
    }
    .h7{
        height:70%;
    }
    .h8{
        height:80%;
    }
    .h9{
        height:90%;
    }
    .h10{
        height:100%;
    }
`;
