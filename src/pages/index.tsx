import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { AppSidebar } from '@/components/Sidebar/Sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { IndexRoutes } from '@/routes';

function Index() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex min-h-screen w-full flex-col items-center justify-start">
        <Header />
        <div className="flex w-full flex-1 items-center justify-start">
          <IndexRoutes />
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
}

export default Index;
