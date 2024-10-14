import { Header } from '../components/Header/Header';
import { IndexRoutes } from '../routes';
import { Container } from './styles';
import { Footer } from '../components/Footer/Footer';

function Index() {
  return (
    <Container>
      <Header />
      <div id="routes">
        <IndexRoutes />
      </div>
      <Footer />
    </Container>
  );
}

export default Index;
