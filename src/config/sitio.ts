// ============================================================================
// CONFIGURACIÓN CENTRAL DEL SITIO
// ============================================================================
// Este es el ÚNICO archivo que hay que editar para cambiar los datos que se
// repiten en todo el sitio: nombre, contacto, redes sociales, datos de la
// radio y las pestañas del menú. Ninguna página inventa estos datos por su
// cuenta: todas los leen de aquí.
//
// Todo lo que diga "TODO" es texto de ejemplo pendiente de reemplazar.
// ============================================================================

/** Identidad de la fundación. */
export const sitio = {
	// TODO: confirmar el nombre exacto como debe aparecer en el sitio.
	nombre: 'FundeUpia',
	nombreCompleto: 'Fundación FundeUpia',
	// Frase corta que explica qué hace la fundación (se muestra en el Inicio).
	// TODO: reemplazar por el lema real.
	lema: 'Sembramos oportunidades en las comunidades del Upía',
	// TODO: reemplazar. Se usa en la etiqueta <meta description> por defecto.
	descripcion:
		'Fundación FundeUpia: educación, acompañamiento social y desarrollo comunitario.',
	// Ruta del logo dentro de /public. Si se deja en '', el encabezado muestra
	// el nombre escrito en texto.
	// Las demás versiones del logo están en public/logo/ (ver LEEME.txt).
	logo: '/logo/fundeupia-logo-horizontal.svg',
	// Versión con letras blancas, para el pie de página (fondo azul). Si se
	// deja en '', el pie muestra el nombre escrito en texto.
	logoClaro: '/logo/fundeupia-logo-horizontal-blanco.svg',
};

/** Datos de contacto. Se muestran en el pie de página de TODAS las páginas. */
export const contacto = {
	// Número de WhatsApp SOLO con dígitos, incluyendo el indicativo del país
	// y sin espacios ni signos (así lo exige el enlace wa.me).
	// TODO: reemplazar por el número real.
	whatsapp: '573001234567',
	// El mismo número, escrito como se le muestra al visitante.
	// TODO: reemplazar.
	whatsappVisible: '+57 300 123 4567',
	// Mensaje con el que se abre el chat de WhatsApp.
	mensajeWhatsapp: 'Hola FundeUpia, quisiera más información.',
	// TODO: reemplazar por el correo real.
	correo: 'contacto@fundeupia.org',
	// TODO: reemplazar por la dirección real.
	direccion: 'Calle 00 # 00-00, Barrio Centro',
	// TODO: reemplazar por la ciudad y el departamento.
	ciudad: 'Ciudad, Departamento',
	// Horario de atención. Dejar en '' para que no se muestre.
	// TODO: reemplazar.
	horarioAtencion: 'Lunes a viernes, 8:00 a.m. a 5:00 p.m.',
};

/**
 * Enlace listo de WhatsApp, armado a partir de los datos de arriba.
 * No hace falta editarlo: cambia solo al cambiar `contacto.whatsapp`.
 */
export const enlaceWhatsapp = `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(
	contacto.mensajeWhatsapp,
)}`;

/**
 * Redes sociales. Para quitar una red, borra su línea; para agregar otra,
 * copia una línea y cambia el nombre y la URL.
 * TODO: reemplazar por las URLs reales de las redes de la fundación.
 */
export const redes = [
	{ nombre: 'Facebook', url: 'https://facebook.com/TODO' },
	{ nombre: 'Instagram', url: 'https://instagram.com/TODO' },
	{ nombre: 'YouTube', url: 'https://youtube.com/@TODO' },
];

/** Datos de la emisora. */
export const radio = {
	// TODO: reemplazar por el nombre real de la emisora.
	nombre: 'Radio FundeUpia',
	// TODO: reemplazar por la frecuencia real (ej. '104.7 FM').
	frecuencia: '00.0 FM',
	// Horario de emisión al aire, en una línea.
	// TODO: reemplazar.
	horario: 'Todos los días, de 6:00 a.m. a 10:00 p.m.',
	// TODO: reemplazar por la frase de la emisora.
	lema: 'La voz de nuestra comunidad',

	// --------------------------------------------------------------------
	// INTERRUPTOR DEL BOTÓN FLOTANTE "RADIO EN VIVO"
	// --------------------------------------------------------------------
	// false = el botón NO se muestra en ninguna página (situación actual,
	//         porque la emisora todavía solo transmite al aire).
	// true  = el botón aparece fijo en la esquina inferior de todas las
	//         páginas y lleva a /radio/.
	// Cuando la radio esté montada, cambiar SOLO esta línea a true.
	radioEnVivo: false,

	// --------------------------------------------------------------------
	// TRANSMISIÓN EN VIVO POR YOUTUBE (dentro de la página /radio/)
	// --------------------------------------------------------------------
	// Mientras `activa` sea false, la página muestra un aviso de
	// "próximamente" en lugar del reproductor. Para activarla:
	//   1. poner `activa: true`
	//   2. pegar en `videoId` el identificador del video de YouTube
	//      (la parte después de "v=" en la URL, ej. 'dQw4w9WgXcQ')
	transmision: {
		activa: false,
		videoId: '',
	},

	/**
	 * Programación por días. Cada día tiene su lista de programas con hora,
	 * nombre y quién lo presenta.
	 * TODO: reemplazar toda esta programación por la real.
	 */
	programacion: [
		{
			dia: 'Lunes a viernes',
			programas: [
				{ hora: '6:00 a.m.', nombre: 'TODO: Nombre del programa', presenta: 'TODO: Presentador' },
				{ hora: '9:00 a.m.', nombre: 'TODO: Nombre del programa', presenta: 'TODO: Presentador' },
				{ hora: '12:00 m.', nombre: 'TODO: Nombre del programa', presenta: 'TODO: Presentador' },
				{ hora: '4:00 p.m.', nombre: 'TODO: Nombre del programa', presenta: 'TODO: Presentador' },
			],
		},
		{
			dia: 'Sábados',
			programas: [
				{ hora: '7:00 a.m.', nombre: 'TODO: Nombre del programa', presenta: 'TODO: Presentador' },
				{ hora: '11:00 a.m.', nombre: 'TODO: Nombre del programa', presenta: 'TODO: Presentador' },
			],
		},
		{
			dia: 'Domingos',
			programas: [
				{ hora: '8:00 a.m.', nombre: 'TODO: Nombre del programa', presenta: 'TODO: Presentador' },
			],
		},
	],

	/**
	 * Presentadores de la emisora.
	 * `foto`: ruta dentro de /public (ej. '/equipo/nombre.jpg'). Si se deja
	 * en '', se muestra un círculo con las iniciales.
	 * TODO: reemplazar por los presentadores reales.
	 */
	presentadores: [
		{ nombre: 'TODO: Nombre y apellido', programa: 'TODO: Programa que presenta', foto: '' },
		{ nombre: 'TODO: Nombre y apellido', programa: 'TODO: Programa que presenta', foto: '' },
		{ nombre: 'TODO: Nombre y apellido', programa: 'TODO: Programa que presenta', foto: '' },
	],
};

/**
 * Equipo directivo, para las tarjetas de la página /nosotros/.
 * `foto`: ruta dentro de /public (ej. '/equipo/ana-gomez.jpg'). Si se deja
 * en '', se muestra un círculo con las iniciales del nombre.
 * TODO: reemplazar por el equipo real.
 */
export const equipo = [
	{ nombre: 'TODO: Nombre y apellido', cargo: 'TODO: Directora ejecutiva', foto: '' },
	{ nombre: 'TODO: Nombre y apellido', cargo: 'TODO: Coordinador de proyectos', foto: '' },
	{ nombre: 'TODO: Nombre y apellido', cargo: 'TODO: Tesorera', foto: '' },
	{ nombre: 'TODO: Nombre y apellido', cargo: 'TODO: Representante legal', foto: '' },
];

/**
 * Documentos de transparencia (sección de /nosotros/).
 * Los PDFs se suben a la carpeta public/documentos/ y aquí se pone la ruta.
 * Mientras `archivo` esté en '', la fila aparece marcada como "pendiente de
 * publicar" y sin enlace: así la sección no queda con enlaces rotos antes de
 * tener los documentos.
 * TODO: subir los PDFs y completar la ruta de cada uno.
 */
export const documentos = [
	{ nombre: 'Informe de gestión', anio: '2025', archivo: '' },
	{ nombre: 'Estados financieros', anio: '2025', archivo: '' },
	{ nombre: 'Certificado de existencia y representación legal', anio: '2025', archivo: '' },
	{ nombre: 'Estatutos de la fundación', anio: '', archivo: '' },
];

/** Pestañas del menú principal. El orden de esta lista es el del menú. */
export const navegacion = [
	{ texto: 'Inicio', href: '/' },
	{ texto: 'Nosotros', href: '/nosotros/' },
	{ texto: 'Proyectos', href: '/proyectos/' },
	{ texto: 'Radio', href: '/radio/' },
];
