function BtnEliminar({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1 rounded cursor-pointer"
    >
      X
    </button>
  );
}

export default BtnEliminar;
