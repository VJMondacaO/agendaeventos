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

  // NUEVO: Crea un estado para el mensaje de error del formulario.
  const [error, setError] = useState('');

  // Este 'efecto' se ejecuta cuando 'eventoEditando' cambia.
  // Sirve para llenar el formulario o limpiarlo.
  useEffect(() => {
    if (eventoEditando) {
      // Si se recibe un evento para editar, se llenan los campos del formulario.
      setForm(eventoEditando);
      setError(''); // Limpia cualquier error previo al empezar a editar.
    } else {
      // Si no, se limpia el formulario a su estado inicial.
      setForm({ id: null, titulo: '', fecha: '', lugar: '', descripcion: '' });
    }
  }, [eventoEditando]); // Se activa solo cuando 'eventoEditando' cambia.

  // Se ejecuta cada vez que el usuario escribe en un campo del formulario.
  const handleChange = (e) => {
    // NUEVO: Limpia el mensaje de error en cuanto el usuario empieza a escribir.
    setError('');
    // Actualiza el campo correspondiente en el estado del formulario.
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Se ejecuta cuando el usuario envía el formulario.
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue.

    // Valida que todos los campos estén llenos.
    if (!form.titulo || !form.fecha || !form.lugar || !form.descripcion) {
      // MODIFICADO: En lugar de alert(), actualiza el estado con el mensaje de error.
      setError('Todos los campos son obligatorios');
      return; // Detiene la ejecución si un campo está vacío.
    }

    // Si la validación es exitosa, se asegura de limpiar cualquier error.
    setError('');
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

      {/* NUEVO: Muestra el mensaje de error si el estado 'error' tiene contenido. */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Botón de envío */}
      <button type="submit" className="btn btn-primary mt-3">
        {/* El texto del botón cambia si se está editando o agregando. */}
        {eventoEditando ? 'Actualizar Evento' : 'Agregar Evento'}
      </button>
    </form>
  );
}

// Exporta el componente para usarlo en otras partes de la aplicación.
export default Formulario;