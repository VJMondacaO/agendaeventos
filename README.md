# Agenda de Eventos con React 📅

Proyecto desarrollado para la **Evaluación 3 de Programación Front End**, enfocado en la aplicación práctica de **React** para crear una aplicación web funcional que permite gestionar eventos personales.

- **Autores:** Johan Manriquez, Víctor Mondaca
- **Ramo:** Programación Front End
- **Carrera:** Analista Programador
- **Institución:** Inacap, sede Talca

---

## Descripción del Proyecto

Esta es una **Single Page Application (SPA)** construida con **Create React App** que permite a los usuarios registrar, editar y eliminar eventos como reuniones, cumpleaños o recordatorios.

Toda la información se guarda en el `localStorage` del navegador, asegurando que los datos persistan entre sesiones. La lista de eventos se presenta ordenada por fecha y el diseño se adapta a distintos dispositivos gracias a Bootstrap.

---

## Funcionalidades

* **Formulario para Crear y Editar:** Un único formulario que permite tanto agregar nuevos eventos como modificar los existentes.
* **Gestión de Eventos (CRUD):**
    * **C**rear: Agregar nuevos eventos con título, fecha, lugar y descripción.
    * **L**eer: Visualizar la lista de eventos ordenada por fecha.
    * **A**ctualizar: Editar cualquier evento existente.
    * **E**liminar: Borrar eventos de la lista.
* **Persistencia de Datos:** Almacenamiento automático en el `localStorage` del navegador.
* **Diseño Adaptable (Responsive):** La interfaz se ajusta correctamente a pantallas de escritorio, tablets y móviles.

---

## Tecnologías Utilizadas 🛠️

* **React:** Biblioteca principal para construir la interfaz de usuario.
* **React Hooks:**
    * `useState`: Para manejar el estado local de los componentes.
    * `useEffect`: Para gestionar efectos secundarios, como la sincronización con `localStorage`.
* **Create React App:** Entorno de desarrollo utilizado para la configuración inicial y los scripts del proyecto.
* **JavaScript (ES6+):** Lenguaje utilizado para toda la lógica de la aplicación.
* **Bootstrap 5:** Framework de CSS para un diseño rápido, moderno y responsivo.
* **LocalStorage API:** Para el almacenamiento de datos en el navegador.

---

## Instalación y Uso Local

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/VJMondacaO/agendaeventos.git](https://github.com/VJMondacaO/agendaeventos.git)
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd agendaeventos
    ```

3.  **Instala las dependencias:**
    (Esto descargará React y otras librerías en la carpeta `node_modules`).
    ```bash
    npm install
    ```

4.  **Inicia la aplicación en modo de desarrollo:**
    (Esto abrirá la aplicación en tu navegador en `http://localhost:3000`).
    ```bash
    npm start
    ```
