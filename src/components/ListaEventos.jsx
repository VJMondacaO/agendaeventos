// Importa React y el componente para un solo evento.
import React from 'react';
import Evento from './Evento';

// Define el componente. Recibe la lista de eventos y las funciones para eliminar y editar.
function ListaEventos({ eventos, eliminarEvento, editarEvento }) {
  // Renderiza el HTML del componente.
  return (
    // Crea una lista de grupo para mostrar los eventos.
    <ul className="list-group">
      {/* Recorre el arreglo 'eventos' y crea un componente 'Evento' por cada uno. */}
      {eventos.map((evento) => (
        <Evento
          // Asigna un 'key' único para que React optimice el renderizado.
          key={evento.id} 
          // Pasa la información completa del evento al componente hijo.
          evento={evento}
          // Pasa la función para eliminar el evento, enviándole el ID correcto.
          onDelete={() => eliminarEvento(evento.id)}
          // Pasa la función para editar el evento, enviándole el objeto completo.
          onEdit={() => editarEvento(evento)}
        />
      ))}
    </ul>
  );
}

// Exporta el componente para que otros archivos lo puedan usar.
export default ListaEventos;