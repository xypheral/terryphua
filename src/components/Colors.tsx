const Colors = () => {
  const colors = ['red', 'blue'];
  const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

  return (
    <div className="flex flex-col items-center text-center justify-center h-screen border-2 border-red-500">
      {colors.map((color) => (
        <div key={color} className="flex border-2 border-red-300">
          <div className="w-1/2 p-4">{color}</div>
          <div className="w-1/2 flex">
            {shades.map((shade) => (
              <div key={shade} className={`w-10 h-10 m-1 bg-${color}-${shade}`}></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Colors;