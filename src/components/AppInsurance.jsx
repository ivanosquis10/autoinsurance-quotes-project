import useQuotation from '../hooks/useQuotation';
import Form from './Form';
import Result from './Result';
import Spinner from './Spinner';

const AppInsurance = () => {
  const { result, charging } = useQuotation();
  return (
    <>
      <header className="my-10">
        <h1 className="text-center text-4xl font-black">
          Auto Insurance Quotes
        </h1>
      </header>
      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto mb-5 p-10 rounded-lg shadow">
        <Form />
        {charging ? <Spinner /> : <Result />}
      </main>
    </>
  );
};

export default AppInsurance;
