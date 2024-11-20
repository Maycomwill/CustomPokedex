import AppProvider from './hooks';
import Index from './pages';

import './styles/main.css';

function App() {
  return (
    <div className="h-full min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      <AppProvider>
        <Index />
      </AppProvider>
    </div>
  );
}

export default App;
