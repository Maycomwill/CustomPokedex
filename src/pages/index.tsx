import { Header } from '../components/Header/Header';
import { IndexRoutes } from '../routes';
import { Footer } from '../components/Footer/Footer';
import { AppSidebar } from '@/components/Sidebar/Sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

function Index() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex min-h-screen w-full flex-col items-center justify-start">
        <Header />
        <div className="flex w-full flex-1">
          <IndexRoutes />
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
}

export default Index;
