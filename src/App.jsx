// Importa lo necesario de React.
import React, { useState, useEffect } from 'react';
// Importa los otros componentes.
import Formulario from './components/Formulario';
import ListaEventos from './components/ListaEventos';

// Componente principal de la aplicación.
function App() {
  // Crea el estado 'eventos', cargando los datos de localStorage al inicio.
  const [eventos, setEventos] = useState(() => {
    const datosGuardados = localStorage.getItem('eventos');
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  // Crea un estado para saber qué evento se está editando.
  const [eventoEditando, setEventoEditando] = useState(null);

  // Guarda los eventos en localStorage cada vez que la lista cambia.
  useEffect(() => {
    localStorage.setItem('eventos', JSON.stringify(eventos));
  }, [eventos]);

  // Función para agregar o actualizar un evento.
  const agregarEvento = (evento) => {
    // Si estamos editando, actualiza el evento existente.
    if (eventoEditando) {
      const nuevosEventos = eventos.map(ev =>
        ev.id === eventoEditando.id ? { ...evento, id: eventoEditando.id } : ev
      );
      setEventos(nuevosEventos);
      setEventoEditando(null); // Limpia el modo edición.
    } else {
      // Si no, crea un evento nuevo con un ID.
      const nuevoEventoConID = { ...evento, id: Date.now() };
      setEventos([...eventos, nuevoEventoConID]);
    }
  };

  // Función para borrar un evento por su ID.
  const eliminarEvento = (id) => {
    const nuevosEventos = eventos.filter(ev => ev.id !== id);
    setEventos(nuevosEventos);
  };

  // Función para poner un evento en modo de edición.
  const editarEvento = (evento) => {
    setEventoEditando(evento);
  };

  // Muestra el contenido HTML del componente.
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Agenda de Eventos</h1>

      {/* Componente del formulario para agregar/editar eventos. */}
      <Formulario
        agregarEvento={agregarEvento}
        eventoEditando={eventoEditando}
      />

      {/* Componente que muestra la lista de eventos. */}
      <ListaEventos
        eventos={eventos}
        eliminarEvento={eliminarEvento}
        editarEvento={editarEvento}
      />
    </div>
  );
}

// Exporta el componente para que la app lo pueda usar.
export default App;