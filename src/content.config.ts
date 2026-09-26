// Define aquí las "colecciones" de contenido del sitio: qué carpetas existen
// dentro de src/content y qué campos (front matter) debe tener cada archivo.
// Astro valida cada entrada .md contra este esquema al compilar, así que si
// falta un campo obligatorio o el tipo no coincide, el build falla con un
// mensaje claro en vez de romperse en producción.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// glob() le dice a Astro dónde están los archivos de esta colección:
	// todos los .md dentro de src/content/blog.
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// pubDate se escribe como texto en el front matter (ej. 2026-08-20)
		// y z.coerce.date() lo convierte automáticamente a un objeto Date.
		pubDate: z.coerce.date(),
		author: z.string().default('Fundación FundeUpia'),
		// Imagen de portada opcional para la entrada (ruta dentro de /public).
		image: z.string().optional(),
	}),
});

// Proyectos de la fundación. Cada proyecto es un archivo .md dentro de
// src/content/proyectos/ y el nombre del archivo define su URL:
// "huertas-comunitarias.md" se publica en /proyectos/huertas-comunitarias/.
const proyectos = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
	schema: z.object({
		titulo: z.string(),
		// Frase corta que se muestra en la tarjeta del listado y del Inicio.
		resumen: z.string(),
		// Ruta de la imagen dentro de /public (ej. '/proyectos/huertas.jpg').
		// Es opcional: si falta, la tarjeta muestra un recuadro de relleno.
		imagen: z.string().optional(),
		// Se escribe como texto (ej. 2026-03-15) y se convierte a fecha.
		fecha: z.coerce.date(),
		// true = aparece también en las tarjetas destacadas del Inicio.
		destacado: z.boolean().default(false),
	}),
});

export const collections = { blog, proyectos };
