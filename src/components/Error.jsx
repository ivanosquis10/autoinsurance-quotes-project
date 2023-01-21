import useQuotation from '../hooks/useQuotation';

const Error = () => {
  const { error } = useQuotation();
  return (
    <div className="bg-red-600 p-2 sm:p-3 text-center rounded-md uppercase font-bold border">
      {error}
    </div>
  );
};

export default Error;
