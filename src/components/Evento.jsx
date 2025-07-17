// Importa React para poder usar JSX.
import React from 'react';

// Define el componente. Recibe el objeto 'evento' y las funciones 'onDelete' y 'onEdit' como props.
function Evento({ evento, onDelete, onEdit }) {
  // Renderiza la estructura visual del componente.
  return (
    // Cada evento es un elemento de una lista.
    <li className="list-group-item d-flex justify-content-between align-items-start flex-column flex-md-row">
      
      {/* Sección izquierda: Muestra los detalles del evento. */}
      <div>
        <strong>{evento.titulo}</strong> - {new Date(evento.fecha).toLocaleDateString('es-CL')}
        <br />
        <em>Lugar:</em> {evento.lugar}
        <br />
        <em>Descripción:</em> {evento.descripcion}
      </div>

      {/* Sección derecha: Contiene los botones de acción. */}
      <div className="mt-2 mt-md-0">
        {/* Botón para editar el evento. */}
        <button
          className="btn btn-warning btn-sm me-2"
          onClick={() => onEdit(evento)}  // Al hacer clic, llama a la función onEdit con todo el objeto del evento.
        >
          Editar
        </button>

        {/* Botón para eliminar el evento. */}
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(evento.id)}  // Al hacer clic, llama a la función onDelete solo con el ID del evento.
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}

// Exporta el componente para que otros archivos puedan usarlo.
export default Evento;