import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cabecalho from '../../../components/comum/cabecalho'
import Rodape from '../../../components/comum/rodapê'
import ProxPag from '../../../components/comum/botao-prox-pag'
import TituloC from '../../../components/comum/titulo'
import Removerb from '../../../assets/img/Xremover.png';
import eu from '../../../assets/img/eu.jpg';

import Modal from '../../../components/comum/modal'

import LinhaSep from '../../../assets/img/linhasep-listass.png';
import { Link } from 'react-router-dom';

import { Container, BlocoC } from './styled.js';

import {Loader} from '../../../components/comum/loader'

import { useState, useEffect } from 'react'

import Api from '../../../1_service/api';
const api = new Api();

//import axios from 'axios';


export default function FilmesGostos(props) {
    const [ filme, setFilme ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ exibirModal, setExibirModal ] = useState({show: false})
    const [ ordenação, setOrdenação ] = useState('A - Z')

    async function Listar() {
        setLoading(true);
        
    

        setLoading(false);
    }

    const Remove = async (id) => {
        const r = await api.RemoverF(id);
        toast.dark('🗑️ Filme Removido!');
        
        Listar();
    }

    useEffect(() => {
        Listar();
      }, [ordenação]);

    return(
        <Container>
            <ToastContainer />
            <Cabecalho/>

            <TituloC nm_filme="Meus Filmes"/>

            <div className="tipos">
                <div className="box1"><Link to="/meusfilmes">
                    <div className="txt">Já assistidos</div>
                    <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                </Link></div>
                
                <div className="box-c"><Link to="/assistimtarde">
                    <div className="txt-d">Assistir mais tarde</div>
                    <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                </Link></div>

                <div className="box"><Link to="/filmespgosto">
                    <div className="txt-d">Por gosto</div>
                    <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                </Link></div>

                <div className="p2">
                    <div className="ordenar">
                        <select onClick={e => setOrdenação(e.target.value)}>
                            <option value="AZ">A - Z</option>
                            <option value="ZA">Z - A</option>
                            <option value="Avaliação">Avaliação</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="filmes">
                {loading && <Loader />}

                { !loading &&
                    filme.map(item => 
                        <BlocoC>
                        <Modal options={exibirModal}>
                            <div className="geral-m">
                                <div className="p1-m">
                                    <div className="img-m"><img src={ item.img_capa_menor } alt="" /></div>
                                    <div className="nome-m" title={ item.nm_filme != null && item.nm_filme > 25? item.nm_filme : null }>{ item.nm_filme != null && item.nm_filme >= 25 ? item.nm_filme.substr(0, 25) + '..' : item.nm_filme }</div>
                                </div>
                                <div className="sep"></div>
                                <div className="p2">
                                    <div className="sub-m"><b>Diretor:</b> {item.nm_diretor}</div>
                                    <div className="sub-m"><b>Descrição:</b> { item.ds_descricao != null && item.ds_descricao >= 105 ? item.ds_descricao.substr(0, 105) + '...' : item.ds_descricao }</div>
                                    <div className="sub2-m"><b>Plataformas:</b> {item.ds_plataforma}</div>
                                    <div className="botao"><button>Ver mais</button></div>
                                </div>
                            </div>
                        </Modal>
                       
                       <div className="filme">
                           {Array != 0
                               ? <div>
                                   <div className="remover" onClick={Remove}> <img src={Removerb} alt=""/> </div>
                                   <div className="img" onClick={() => setExibirModal({show: true})}><img src={item.img_capa_menor} alt="" /></div> 
                                   <div className="nome" onClick={() => setExibirModal({show: true})} title={ item.nm_filme != null && item.nm_filme > 25? item.nm_filme : null }>{ item.nm_filme != null && item.nm_filme >= 25 ? item.nm_filme.substr(0, 25) + '...' : item.nm_filme }</div>
                               </div>
           
                               : <div><img src={eu} alt="" /><div>Você ainda não inseriu nenum filme</div></div> 
           
               
                           }
                       </div>
                      </BlocoC>
                    )
                }
            </div>

            <ProxPag />


            <Rodape/>
        </Container>
    )
}


//'http://localhost:3030/filmesjassistidos?ordenacao=' + ordenação
// const resp = await axios.get('http://localhost:3030/filmesjassistidos?ordenacao=' + ordenação) setOrdenação([...resp.data])