import { useMemo, useRef } from 'react';
import useQuotation from '../hooks/useQuotation';
import { BRANDS, PLANS } from '../constants/';

const Result = () => {
  const { result, data } = useQuotation();
  const { brand, plan, year } = data;

  // esto lo que hara es congelar la informacion guardad en "year" para que no cambien el estado si no se cotiza
  const yearRef = useRef(year);

  const [brandName] = useMemo(
    () => BRANDS.filter((b) => b.id === Number(brand)),
    [result]
  );

  const [planName] = useMemo(
    () => PLANS.filter((p) => p.id === Number(plan)),
    [result]
  );

  if (result === 0) return null;

  return (
    <div className="bg-slate-300 border mt-5 p-3 rounded-md shadow-md md:p-5">
      <h2 className="text-3xl font-bold text-slate-600 text-center border-b border-slate-400">
        Overview
      </h2>
      <p className="text-slate-600 md:text-xl mt-1">
        Brand:
        <span className="font-bold text-slate-700"> {brandName.name}</span>
      </p>

      <p className="text-slate-600 md:text-xl mt-1">
        Plan:
        <span className="font-bold text-slate-700"> {planName.name}</span>
      </p>

      <p className="text-slate-600 md:text-xl mt-1">
        Year car:
        <span className="font-bold text-slate-700"> {yearRef.current}</span>
      </p>

      <p className="text-slate-600 my-2 text-lg md:text-3xl">
        Total of the quotation:
        <span className="font-bold text-slate-700"> {result}</span>
      </p>
    </div>
  );
};

export default Result;
