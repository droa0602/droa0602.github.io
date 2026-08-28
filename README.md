# Blog de FundeUpia

Sitio del blog de la Fundación FundeUpia, construido con [Astro](https://astro.build).
Se despliega automáticamente en GitHub Pages (https://droa0602.github.io) mediante
GitHub Actions cada vez que se hace push a la rama `main`.

## Estructura del proyecto

```text
/
├── src/
│   ├── content/
│   │   └── blog/            # Entradas del blog, una por archivo .md
│   ├── content.config.ts    # Esquema (campos obligatorios) de las entradas
│   ├── layouts/
│   │   ├── BaseLayout.astro # Estructura HTML compartida por todas las páginas
│   │   └── PostLayout.astro # Estructura propia de una entrada individual
│   ├── components/
│   │   ├── Header.astro     # Encabezado / menú de navegación
│   │   └── Footer.astro     # Pie de página
│   ├── pages/
│   │   ├── index.astro        # Portada: lista de entradas (más recientes primero)
│   │   ├── quienes-somos.astro
│   │   └── blog/[slug].astro  # Página de cada entrada individual
│   └── styles/
│       └── global.css       # Estilos, responsive (mobile-first)
├── public/                  # Archivos estáticos (favicon, imágenes, etc.)
└── .github/workflows/deploy.yml # Publica el sitio en GitHub Pages
```

## Cómo agregar una nueva entrada

1. Crea un archivo `.md` nuevo dentro de `src/content/blog/`, por ejemplo
   `mi-entrada.md`. El nombre del archivo define la URL final
   (`/blog/mi-entrada/`).
2. Al principio del archivo agrega el front matter (los datos entre `---`):

   ```md
   ---
   title: "Título de la entrada"
   description: "Resumen corto para la portada."
   pubDate: 2026-09-01
   author: "Equipo FundeUpia"
   ---

   Aquí va el contenido en Markdown normal.
   ```

3. Para incrustar un video de YouTube dentro del texto, pega este bloque en
   el lugar donde quieras que aparezca (reemplazando `VIDEO_ID` por el id
   del video, la parte final de la URL de YouTube):

   ```html
   <div class="video-embed">
     <iframe
       src="https://www.youtube.com/embed/VIDEO_ID"
       title="Descripción del video"
       loading="lazy"
       allowfullscreen
     ></iframe>
   </div>
   ```

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando             | Acción                                              |
| :------------------ | :--------------------------------------------------- |
| `npm install`        | Instala las dependencias                             |
| `npm run dev`         | Levanta el servidor local en `localhost:4321`         |
| `npm run build`       | Compila el sitio a `./dist/`                          |
| `npm run preview`     | Previsualiza localmente el sitio ya compilado          |

## Despliegue

El despliegue es automático: al hacer push a `main`, el workflow definido en
`.github/workflows/deploy.yml` compila el sitio y lo publica en GitHub
Pages. En la configuración del repositorio (`Settings → Pages`), la fuente
debe estar en "GitHub Actions".
