import { useContext } from 'react';
import QuotationContext from '../context/QuotationProvider';

// La idea de este custom hook es hacer que la tarea de importar el useContext, el contexto, extraer, etc. Sea mas sencillo en un hook que ya hace todo lo necesario para asi solo tener que importarlo en el componente y llamar "useQuotation" y ya tener acceso al estado y toda la informacion.
const useQuotation = () => {
  return useContext(QuotationContext);
};

export default useQuotation;
