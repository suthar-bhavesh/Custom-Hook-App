import useFetch from "./src/Hooks/Usefetch";
import ProductList from "./src/Components/Productlist";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products",
  );

  if (loading) {
    return (
      <h2 className="text-white flex justify-center h-screen items-center">
        Loading...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="text-white flex justify-center h-screen items-center">
        Error: {error}
      </h2>
    );
  }

  return <ProductList data={data} />;
};

export default App;
