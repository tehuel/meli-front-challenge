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

Existen Test de integración. Para ejecutar los tests, teniendo el proyecto levantado y corriendo, ejecutar

```bash
# ejecuto tests de integración (Cypress)
npm run cy
```

## Features

### Frontend

El proyecto está construido usando React, con `create-react-app`, componentes funcionales y Hooks (para el manejo de estado y comunicacion con la API, principalmente).

Para los estilos se está usando Sass, con sintaxis SCSS, intentando mantener aislados y modulares los estilos de cada componente, y compartiendo y generalizando variables y mixins en lo posible.

Todas las llamadas a la API se están haciendo usando un Hook custom, que se encarga de manejar los estados de "cargando", "errores", y almacenando los datos de respuesta.

La navegación entre las distintas páginas se está haciendo usando React-Router, usando un componente `<Link>`, y también de manera programática, usando un Hook `useHistory()`.

El precio que se recibe desde backend en distintos componentes se está formateando en frontend usando una funcion de filtro.

### Backend

Decidí usar la plataforma Vercel Now para deploy serverless de frontend y backend, sin tenerr que administrar servidores. 

En el directorio `./api/` del proyecto, los archivos `items.js` y `details.js` son expuestos como endpoints. A partir de un rewrite (configurado en `vercel.json`) termino exponiendo

- endpoint `/api/items` -> handler `items.js`
- endpoint `/api/items/:id` -> handler `details.js`

Los endpoints responden distintos tipos de errores ante posibles fallos en el procesamiento de los datos.

El formateo y la construcción de los objetos de respuesta se extrajo a funciones independientes, para facilitar la reutilización y posibles modificaciones.

## Mejoras

Algunas ideas me quedaron pendientes, y otras se me fueron ocurriendo a medida que desarrollaba la solución.

- Definir Tipos (TypeScript) para los objetos que se comparten entre el backend y el frontend. Esto haría que posibles cambios en el formato de la respuesta del backend sean fáciles de replicar y adaptar en el frontend.
- 
