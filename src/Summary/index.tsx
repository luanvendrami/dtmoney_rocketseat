import entradaImg from '../assents/Entradas.svg';
import saidaImg from '../assents/Saídas.svg';
import totalImg from '../assents/Total.svg';
import { Container } from "./style";

export function Summary(){
    return(
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={entradaImg} alt="Entradas" />
          </header>
          <strong>R$1000,00</strong>
        </div>
        <div>
          <header>
            <p>Saidas</p>
            <img src={saidaImg} alt="Saidas" />
          </header>
          <strong>-R$500,00</strong>
        </div>
        <div className='highlight-background'>
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>R$500,00</strong>
        </div>
      </Container>
    )
}