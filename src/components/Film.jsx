import BtnEliminar from "./BtnEliminar";
import BtnUpdate from "./BtnUpdate";

function Film({ peli, onEliminar, onEditar }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
      <div>
        <img
          src={peli.image}
          alt={peli.name}
          className="w-full h-64 object-cover rounded mb-3"
        />
        <h3 className="text-lg font-bold text-gray-800">{peli.name}</h3>
        <p className="text-gray-500 mb-4">Año: {peli.year}</p>
      </div>

      <div className="flex justify-between items-center gap-2">
        <BtnUpdate onClick={() => onEditar(peli)} />
        <BtnEliminar onClick={() => onEliminar(peli.id)} />
      </div>
    </div>
  );
}

export default Film;
