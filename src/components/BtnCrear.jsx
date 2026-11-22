function BtnCrear({ texto = "Añadir película" }) {
  return (
    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded cursor-pointer"
    >
      {texto}
    </button>
  );
}

export default BtnCrear;
