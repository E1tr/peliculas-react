function BtnUpdate({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-3 py-1 rounded cursor-pointer"
    >
      Update
    </button>
  );
}

export default BtnUpdate;
