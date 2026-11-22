import Film from "./Film";

function GridFilms({ pelis, onEliminar, onEditar }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {pelis.map((peli) => (
        <Film
          key={peli.id}
          peli={peli}
          onEliminar={onEliminar}
          onEditar={onEditar}
        />
      ))}
    </div>
  );
}

export default GridFilms;
