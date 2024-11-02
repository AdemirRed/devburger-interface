import Logo from '../../assets/Logo 1.svg'
import {Container, Banner, Title, Content} from './styles.js'

export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt='Logo devBurger'></img>
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                {/* <CartItems/>
                 <CartResume/> */}
            </Content>
        </Container>
    )
}