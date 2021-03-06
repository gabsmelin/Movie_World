import Cabecalho from '../../components/comum/Cabecalho-Geral';
import Rodape from '../../components/comum/Rodape-Geral';
import Com from '../../components/comum/Conte-Comment';

import { Container, PartePrin } from './styled';
import { useState, useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Api from '../../service/api';
const api = new Api();

export default function Comentarios(props) {
    const [filme, setFilme] = useState([]);

    async function ListarU() {
        let r = await api.ListarCU();
        console.log(r);
        setFilme(r);
    }

    const Remove = async () => {
        let r = await api.RemoverC(); 
        console.log(r);
        toast.dark('🗑️ Filme Removido!');
        ListarU();
    }

    useEffect(() => {
        ListarU();
    }, []);


    return(
        <Container>
            <ToastContainer />
            <Cabecalho/>
            <PartePrin>
                <div className="titulo">Comentários:</div>
                <div className="bloco1">
                <div>
                    <div className="txt-c">Há muita coisa acontecendo para este tempo de execução e os setpieces são um pouco desanimadores em comparação com as entradas anteriores. Eles poderiam ter pelo menos, feito com que John Cena vencesse aquele grandalhão no final.</div>
                    <div className="excluir"><button onClick={Remove}>Excluir</button></div>
                </div>
                </div>


                <div className="bloco2">
                   <Com />
                </div>

            </PartePrin>

            <Rodape />
        </Container>
    )
}

