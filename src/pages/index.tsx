import { Header } from '../components/Header/Header';
import { IndexRoutes } from '../routes';
import { Footer } from '../components/Footer/Footer';

function Index() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start">
      <Header />
      <div className="flex flex-1">
        <IndexRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default Index;
