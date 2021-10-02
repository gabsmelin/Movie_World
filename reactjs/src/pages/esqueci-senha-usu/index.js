import  LogoeBarra from '../../componentes/comum/tituloEbarra-login'


import { Container, Parte2 } from './style'
import BotaoL from '../../componentes/styled/botoes-rosa'

export default function Esqueci() {
    return(
        <Container>
            <LogoeBarra />

            <Parte2>
                <div className="texto">
                    <div className="txt">
                        Digite seu endereço de e-mail abaixo e enviaremos um link para que você possa redefinir sua senha.
                    </div>
                </div>
                <div className="email-inp-bt">
                    <div className="txt1">E-mail:</div>
                    <div className="input"><input placeholder="Digite seu e-mail"/></div>
                </div>
                <div className="botao">
                    <BotaoL nome="Enviar" />
                </div>
            </Parte2>
        </Container>
    )
}