import { QuotationProvider } from './context/QuotationProvider';
import AppInsurance from './components/AppInsurance';

function App() {
  return (
    <QuotationProvider>
      <AppInsurance />
    </QuotationProvider>
  );
}

export default App;
