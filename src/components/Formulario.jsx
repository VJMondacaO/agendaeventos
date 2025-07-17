// Importa React y los hooks 'useState' y 'useEffect'.
import React, { useState, useEffect } from 'react';

// Define el componente. Recibe dos props: una función para agregar/actualizar eventos
// y el evento que se está editando actualmente.
function Formulario({ agregarEvento, eventoEditando }) {
  // Crea un estado para manejar los datos de los campos del formulario.
  const [form, setForm] = useState({
    id: null,
    titulo: '',
    fecha: '',
    lugar: '',
    descripcion: ''
  });

  // Este 'efecto' se ejecuta cuando 'eventoEditando' cambia.
  // Sirve para llenar o limpiar el formulario.
  useEffect(() => {
    if (eventoEditando) {
      // Si se recibe un evento para editar, se llenan los campos del formulario con sus datos.
      setForm(eventoEditando);
    } else {
      // Si no, se limpia el formulario a su estado inicial.
      setForm({ id: null, titulo: '', fecha: '', lugar: '', descripcion: '' });
    }
  }, [eventoEditando]); // Se activa solo cuando 'eventoEditando' cambia.

  // Se ejecuta cada vez que el usuario escribe en un campo del formulario.
  const handleChange = (e) => {
    // Actualiza el campo correspondiente en el estado del formulario.
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Se ejecuta cuando el usuario envía el formulario.
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue.

    // Valida que todos los campos estén llenos.
    if (!form.titulo || !form.fecha || !form.lugar || !form.descripcion) {
      alert('Todos los campos son obligatorios');
      return; // Detiene la ejecución si un campo está vacío.
    }

    // Llama a la función del componente padre para guardar los datos.
    agregarEvento(form);
    // Limpia el formulario después de enviarlo.
    setForm({ id: null, titulo: '', fecha: '', lugar: '', descripcion: '' });
  };

  // Renderiza el formulario en HTML.
  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm mb-4">
      {/* Campo para el título del evento */}
      <div className="mb-3">
        <label className="form-label">Título del evento</label>
        <input type="text" name="titulo" value={form.titulo} onChange={handleChange} className="form-control" />
      </div>
      {/* Campo para la fecha */}
      <div className="mb-3">
        <label className="form-label">Fecha</label>
        <input type="date" name="fecha" value={form.fecha} onChange={handleChange} className="form-control" />
      </div>
      {/* Campo para el lugar */}
      <div className="mb-3">
        <label className="form-label">Lugar</label>
        <input type="text" name="lugar" value={form.lugar} onChange={handleChange} className="form-control" />
      </div>
      {/* Campo para la descripción */}
      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea name="descripcion" value={form.descripcion} onChange={handleChange} className="form-control" />
      </div>
      {/* Botón de envío */}
      <button type="submit" className="btn btn-primary">
        {/* El texto del botón cambia si se está editando o agregando. */}
        {eventoEditando ? 'Actualizar Evento' : 'Agregar Evento'}
      </button>
    </form>
  );
}

// Exporta el componente para usarlo en otras partes de la aplicación.
export default Formulario;