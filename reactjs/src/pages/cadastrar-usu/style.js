import styled from "styled-components";


const Container = styled.div `
    display: flex; 
    flex-direction: row;
    background-color: #000;
    justify-content: center;
    align-items: center;
    height: 100vh;

    
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;  
        padding: 1.5em 0em;
        height: 100%;
    }
`;

const Parte2 = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    margin-right: -17.3em;

    .txt {
        font-size: 20px;
        font-family: Montserrat;
        margin-bottom: 20px;
    }

    .inputsss {
        display: flex;
        flex-direction: column;
    }

    .inputsss-d {
        display: flex;
        flex-direction: row;
    }

    .sep {
        display: flex;
        flex-direction: row;
    }

    .txt-1 {
        font-size: 15px;
        font-family: Montserrat;
        margin-bottom: 8px;
    }

    .txt-d {
        margin-bottom: 5px;
    }

    .bloco-inp {
        display: flex;
        flex-direction: row;
        margin-bottom: 15px;
        margin-left: 2em;
    }

    .inp {
        margin-right: 20px;
    }

    .btn {
        margin-right: 9%;
        text-align: end;
        margin-top: 3%;
    }

    .geral {
        margin-left: 20px;
        margin-bottom: 20px;
    }

    .input-d input{
        width: 34em;
        padding: 10px;
    }

    .bloco2 {
        margin-top: 25px;
    }

    .botao {
        margin-right: 4.8em;
        text-align: end;
    }

    input {
        width: 15em;
        height: 2.3em;
    }

    placeholder {
        color: #2d2d2d;
        font-family: Montserrat;
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        margin: 0px;
        align-items: center;

        .bloco1 { display: flex; flex-direction: column; }
        .bloco2 { display: flex; flex-direction: column; }
        .bloco-inp { display: flex; flex-direction: column; margin: 0px; }
        .barra img{ width: 350px; }
        .bloco2 { margin-top: 25px; }
        .botao { margin: 0px; }
        .input-d input{  width: 18em; }
        .barra { margin: 20px 0px; }
        .inp { margin-top: 20px; }
        input { width: 250px; }
        .input-d input{ width: 250px; }
        .btn { margin-top: 35px; }
    }

`;






export { Container, Parte2 }