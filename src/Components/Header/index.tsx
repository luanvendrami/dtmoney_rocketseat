import logoImg from '../../assents/logo.svg'
import { Container } from './styles'
import { Content } from './styles'

export function Header(){
    return (
        <Container>
            <Content>       
           <img src={logoImg} alt="dt money"/>
           <button type="button">
               Nova transação             
           </button>
           </Content>
        </Container>
    )
}