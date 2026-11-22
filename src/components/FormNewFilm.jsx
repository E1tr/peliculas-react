import { useState, useEffect } from "react";
import BtnCrear from "./BtnCrear";

function FormNewFilm({ onAgregar, peliEditar, onActualizar, cancelarEdicion }) {
  const [nombre, setNombre] = useState("");
  const [anio, setAnio] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    if (peliEditar) {
      setNombre(peliEditar.name);
      setAnio(peliEditar.year);
      setImagen(peliEditar.image);
    } else {
      setNombre("");
      setAnio("");
      setImagen("");
    }
  }, [peliEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !anio || !imagen) {
      return;
    }

    if (peliEditar) {
      onActualizar({
        ...peliEditar,
        name: nombre,
        year: Number(anio),
        image: imagen,
      });
    } else {
      const nuevaPeli = {
        id: Date.now(),
        name: nombre,
        year: Number(anio),
        image: imagen,
      };
      onAgregar(nuevaPeli);
    }

    setNombre("");
    setAnio("");
    setImagen("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-lg shadow flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold text-gray-800">
        {peliEditar ? "Editar película" : "Nueva película"}
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Título
        </label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej: Interstellar"
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Año
        </label>
        <input
          type="number"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
          placeholder="Ej: 2014"
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          URL de la imagen
        </label>
        <input
          type="text"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          placeholder="https://..."
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <BtnCrear texto={peliEditar ? "Guardar cambios" : "Añadir película"} />

      {peliEditar && (
        <button
          type="button"
          onClick={cancelarEdicion}
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded cursor-pointer"
        >
          Cancelar
        </button>
      )}
    </form>
  );
}

export default FormNewFilm;
