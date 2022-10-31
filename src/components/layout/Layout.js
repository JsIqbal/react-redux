import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import {} from 'react-router-dom';

const Layout = (props) => {
    return (
        <>
            <Header />
                <Container>
                    { props.children }
                </Container>
            <Footer />
        </>
    )
}

export default Layout;