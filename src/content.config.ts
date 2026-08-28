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

export const collections = { blog };
