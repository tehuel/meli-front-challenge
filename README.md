# meli-front-challenge

Challenge de Frontend para Mercado Libre, de Tehuel Torres Baldi.

## Local 

```bash
# instalo dependencias
npm install

# ejecuto frontend y backend juntos
npx vercel dev
```

Por defecto se va a ejecutar el frontend en http://localhost:3000, y el backend en http://localhost:3000/api.

## Tests

Para ejecutar los tests, teniendo el proyecto levantado y corriendo, ejecutar: 

```bash
# ejecuto tests de integración (Cypress)
npm run cy
```

```bash
# ejecuto tests de respuestas de API (Jest)
npm run test
```

## Features

### Frontend

El proyecto está construido usando React, con `create-react-app`, componentes funcionales y Hooks (para el manejo de estado y comunicación con la API, principalmente).

Para los estilos se está usando Sass, con sintaxis SCSS, intentando definir la mínima cantidad de estilos, mantener aislados y modulares los componentes, y compartiendo variables.

Todas las llamadas a la API se están haciendo usando un Hook custom, que se encarga de manejar los estados de "cargando", "errores", y almacenando los datos de respuesta.

La navegación entre las distintas páginas se está haciendo usando React-Router, usando un componente `<Link>`, y también de manera programática, usando un Hook `useHistory()`.

El precio que se recibe desde backend en distintos componentes se está formateando en frontend usando una función de filtro.

### Backend

Decidí usar la plataforma Vercel Now para deploy serverless de frontend y backend, sin tener que administrar servidores. 

En el directorio `./api/` del proyecto, los archivos `items.js` y `details.js` son expuestos como endpoints. A partir de un rewrite (configurado en `vercel.json`) termino exponiendo

- endpoint `/api/items` -> handler `items.js`
- endpoint `/api/items/:id` -> handler `details.js`

Los endpoints responden distintos tipos de errores ante posibles fallos en el procesamiento de los datos.

El formateo y la construcción de los objetos de respuesta se extrajo a funciones independientes, para facilitar la reutilización y posibles modificaciones.

## Mejoras / Pendientes

Algunas ideas me quedaron pendientes, y otras se me fueron ocurriendo a medida que desarrollaba la solución.

- Definir Tipos (TypeScript) para los objetos que se comparten entre el backend y el frontend. Esto haría que posibles cambios en el formato de la respuesta del backend sean fáciles de replicar y adaptar en el frontend.
- Usando un backend express (en lugar de funciones lambda independientes) se podría hacer uso de "middlewares" para el manejo de algunas tareas comunes (como la validación de parámetros recibidos, y también el proceso de la respuesta, para agregar el autor a todas las respuestas).
- Se pueden definir tests unitarios a nivel componentes de React, así como también para las funciones que se 
- Todas las URLs de endpoints de API se pueden configurar usando variables de ambiente (ENV)