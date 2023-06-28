import styled from "styled-components";
import background from '../../images/background.jpg';

export const BannerApp = styled.div `
    //background-color: red;
    background-image: url(${background});
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 135px 0; 
   
    h1{
        font-size: 48px;
    }

    p{
        font-size: 18px;
        max-width: 460px;
        text-align: center;
    }

    input{
        padding: 10px;
        width: 250px;
        background-color: transparent;
        color: white;
        border: solid 1px #00B1E9;
        border-radius: 5px;
        margin-top: 10px;
    }

    @media (max-width: 640px){

        padding: 70px 0;

        h1{
            font-size: 36px;
        }

        p{
            font-size: 14px;
        }

    }

`