import { useState } from "react";
import { peliculas } from "./data/films";
import FormNewFilm from "./components/FormNewFilm";
import GridFilms from "./components/GridFilms";

function App() {
  const [pelis, setPelis] = useState(peliculas);
  const [peliEditar, setPeliEditar] = useState(null);

  const agregarPeli = (nuevaPeli) => {
    setPelis([...pelis, nuevaPeli]);
  };

  const eliminarPeli = (id) => {
    setPelis(pelis.filter((peli) => peli.id !== id));
    if (peliEditar && peliEditar.id === id) {
      setPeliEditar(null);
    }
  };

  const seleccionarEditar = (peli) => {
    setPeliEditar(peli);
  };

  const actualizarPeli = (peliActualizada) => {
    setPelis(
      pelis.map((peli) =>
        peli.id === peliActualizada.id ? peliActualizada : peli
      )
    );
    setPeliEditar(null);
  };

  const cancelarEdicion = () => {
    setPeliEditar(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Catálogo de Películas
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-80 shrink-0">
          <FormNewFilm
            onAgregar={agregarPeli}
            peliEditar={peliEditar}
            onActualizar={actualizarPeli}
            cancelarEdicion={cancelarEdicion}
          />
        </div>

        <div className="flex-1 w-full">
          <GridFilms
            pelis={pelis}
            onEliminar={eliminarPeli}
            onEditar={seleccionarEditar}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
