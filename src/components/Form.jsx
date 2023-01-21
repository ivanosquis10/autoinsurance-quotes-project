import { Fragment } from 'react';
import useQuotation from '../hooks/useQuotation';
import { BRANDS, YEARS, PLANS } from '../constants';
import Error from './Error';

const Form = () => {
  const { data, handleChangeData, error, setError, quoteInsurance } =
    useQuotation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(data).includes('')) {
      setError('todos los campos son obligatorios!');
      return;
    }
    // en caso de que no haya erorr, reiniciamos el state de error
    setError('');
    // Y luego hacemos la cotizacion
    quoteInsurance();
  };

  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        {/* brand */}
        <div className="my-5">
          <label className="block text-slate-500 font-bold uppercase mb-2">
            Brand
          </label>
          <select
            name="brand"
            className="w-full p-3 text-slate-600 border border-slate-400 rounded-md"
            onChange={(e) => handleChangeData(e)}
            value={data.brand}
          >
            <option disabled value="">
              - - Select Brand - -
            </option>

            {BRANDS.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        {/* year */}
        <div className="my-5">
          <label className="block text-slate-500 font-bold uppercase mb-2">
            Year
          </label>
          <select
            name="year"
            className="w-full p-3 text-slate-600 border border-slate-400 rounded-md"
            onChange={(e) => handleChangeData(e)}
            value={data.year}
          >
            <option value="" disabled>
              - - Select Year - -
            </option>

            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* plans */}
        <div className="my-5">
          <label className="block text-slate-500 font-bold uppercase mb-2">
            Choose a plan:
          </label>
          <div className="flex gap-2 items-center">
            {PLANS.map((plan) => (
              <Fragment key={plan.id}>
                <label className="text-slate-500 font-bold uppercase">
                  {' '}
                  {plan.name}{' '}
                </label>
                <input
                  name="plan"
                  type="radio"
                  value={plan.id}
                  onChange={(e) => handleChangeData(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          className="w-full bg-indigo-700 p-3 rounded-md font-bold uppercase text-xl hover:bg-indigo-800 ease-in-out duration-300 cursor-pointer"
          value="Quote insurance"
        />
      </form>
    </>
  );
};

export default Form;
