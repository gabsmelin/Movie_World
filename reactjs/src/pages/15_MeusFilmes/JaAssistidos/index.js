import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cabecalho from '../../../components/comum/Cabecalho-Geral'
import Rodape from '../../../components/comum/Rodape-Geral'
import ProxPag from '../../../components/comum/ProxPag-Button'
import TituloC from '../../../components/comum/titulo'
import Removerb from '../../../assets/img/Xremover.png';

import Modal from '../../../components/comum/Modal-Filmes'

import LinhaSep from '../../../assets/img/linhasep-listass.png';
import { Link } from 'react-router-dom';

import { Container, BlocoC } from './styled.js';

import {Loader} from '../../../components/comum/Loader-Filmes'

import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom';

import Api from '../../../service/api';
import axios from 'axios';
const api = new Api();



export default function FilmesGostos(props) {
    const [ filme, setFilme ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ exibirModal, setExibirModal ] = useState({show: false})
    const [ ordenacao, setOrdanacao ] = useState('A - Z')
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);

    const nav = useHistory();

    
    async function Listar() {
        const resp = await axios.get('https://mw-heroku.herokuapp.com/filusu/ja/filmes?page=' + pagina);
        setFilme([...resp.data.itens]);
        setTotalPaginas(resp.data.totalPaginas);
    }

    function irPara(pagina) {
        setPagina(pagina);
    }

    const Remove = async (id) => {
        const r = await api.RemoverF(id);
        toast.dark('🗑️ Filme Removido!');
        
        Listar();
    }

    useEffect(() => {
        Listar();
      }, [ordenacao, pagina]);


    return(
        <Container>
            <ToastContainer />
            <Cabecalho/>

            <TituloC nome="Meus Filmes"/>

            <div className="tipos">
                <div className="p1">
                    <div className="box1"><Link to="/meusfilmes">
                        <div className="txt">Já assistidos</div>
                        <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                    </Link></div>
                    
                    <div className="box-c"><Link to="/meusfilmes/comfA">
                        <div className="txt-d">Assistir mais tarde</div>
                        <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                    </Link></div>

                    <div className="box"><Link to="/meusfilmes/comfP">
                        <div className="txt-d">Por gosto</div>
                        <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                    </Link></div>
                </div>

                <div className="p2">
                    <div className="ordenar">
                        <select onClick={e => setOrdanacao(e.target.value)}>
                            <option value="A - Z">A - Z</option>
                            <option value="Z - A">Z - A</option>
                            <option value="Avaliação">Avaliação</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="filmes">
                { filme.map(item => 
                        <BlocoC>
                        <div className="filme">
                            <div>
                               <div className="remover" onClick={Remove}> <img src={Removerb} alt=""/> </div>
                               <Link to={{ pathname: '/detfilmes', state: item}}>
                                <div className="img"><img src={item.img_menor} alt="" /></div> 
                                <div className="nome" title={ item.nome != null && item.nome > 25? item.nome : null }>{ item.nome != null && item.nome >= 25 ? item.nome.substr(0, 25) + '...' : item.nome }</div>
                               </Link>
                            </div>
                        </div>
                      </BlocoC>
                    )}
            </div>

            <div>
                <ProxPag 
                    totalPaginas={totalPaginas}
                    pagina={pagina}
                    onPageChange={irPara}
                />
            </div>
                    


            <Rodape/>
        </Container>
    )
}


//'http://localhost:3030/filmesjassistidos?ordenacao=' + ordenacao
// const resp = await axios.get('http://localhost:3030/filmesjassistidos?ordenacao=' + ordenacao) setOrdanacao([...resp.data])

//onClick={() => setExibirModal({show: true})} 