import { useState, createContext } from 'react';
import {
  getYearDifference,
  calculateBrand,
  calculatedPlan,
  formatMoney,
} from '../helpers';

// Aqui inicializamos el context
const QuotationContext = createContext();

// El provider va a ser el lugar donde se definira el state, effects, funciones, etc.
// En pocas palabras, sera la fuente de los datos
const QuotationProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: '',
    year: '',
    plan: '',
  });

  const [error, setError] = useState('');
  const [result, setResult] = useState(0);
  const [charging, setCharging] = useState(false);

  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const quoteInsurance = () => {
    // la base, de 2000
    let result = 2000;
    // Obtener la diferencia de años
    const yearDifference = getYearDifference(data.year);
    
    // hay que restar el 3% por cada año
    result -= (yearDifference * 3 * result) / 100;

    // Europeo sube el 30%
    // Americano sube el 15%
    // Asiatico sube el 5%
    result *= calculateBrand(data.brand);

    // el plan completo sube el 50%
    // el plan basico sube el 20%
    result *= calculatedPlan(data.plan);

    // formatear dinero
    result = formatMoney(result);

    setCharging(true);

    setTimeout(() => {
      setCharging(false);
      setResult(result);
    }, 3000);
  };

  return (
    <QuotationContext.Provider
      value={{
        data,
        handleChangeData,
        error,
        setError,
        quoteInsurance,
        result,
        charging,
      }}
    >
      {children}
    </QuotationContext.Provider>
  );
};

export { QuotationProvider };

export default QuotationContext;
