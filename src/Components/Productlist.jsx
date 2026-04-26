const ProductList = ({ data }) => {
  return (
    <>
      <div className="flex justify-center text-3xl text-white font-bold mt-11">
        <h2>Photos</h2>
      </div>

      <div className="flex mt-10 max-w-7xl m-auto">
        <div className="grid grid-cols-4 items-center gap-5 justify-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full h-full border-2 border-white p-3 flex flex-col justify-center items-center gap-4"
            >
              <img src={item.images[0]} />
              <p className="text-white w-full">{item.title}</p>
              <p className="text-white w-full">RS. {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
