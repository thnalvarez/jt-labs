# Design System

Especificación técnica oficial del sistema de diseño de JT Labs.

Este documento establece los principios, escalas, patrones y reglas que deberán guiar el diseño de los productos digitales de la marca. No define todavía una implementación técnica ni reemplaza las validaciones de accesibilidad, contenido y experiencia de usuario de cada proyecto.

## Filosofía

El sistema de diseño debe convertir la identidad de JT Labs en experiencias coherentes, comprensibles y orientadas a resultados.

- **Moderno:** utilizar patrones actuales que resulten familiares, eficientes y pertinentes, evitando tendencias visuales sin una función clara.
- **Limpio:** mantener jerarquías evidentes, espacios suficientes y una cantidad controlada de elementos por vista.
- **Tecnológico:** comunicar precisión, innovación y dominio digital mediante detalles visuales sobrios y funcionales.
- **Minimalista:** conservar solo los elementos necesarios para comprender el contenido y completar una acción.
- **Profesional:** demostrar consistencia, atención al detalle y confiabilidad en cada punto de contacto.
- **Enfocado en conversión:** facilitar que las personas entiendan la propuesta de valor y avancen hacia acciones relevantes sin fricciones ni manipulación.
- **Accesible:** diseñar para distintas capacidades, dispositivos y formas de interacción desde el inicio.
- **Mobile First:** resolver primero la experiencia en pantallas pequeñas y enriquecerla progresivamente cuando exista más espacio.

La claridad siempre tendrá prioridad sobre la decoración. Toda decisión visual deberá responder a una necesidad de comunicación, orientación, interacción o identidad.

## Sistema de colores

Los nombres y funciones de color definidos a continuación son oficiales. Sus valores cromáticos definitivos se establecerán después de validar contraste, identidad, reproducción en pantallas y compatibilidad entre modos visuales.

### Primary

Color principal de la marca. Se utilizará en acciones prioritarias, enlaces destacados, indicadores activos y elementos que necesiten reconocimiento inmediato. Su aplicación debe ser consistente y controlada.

### Secondary

Color de apoyo para acciones secundarias, elementos informativos y composiciones que requieran variedad sin competir con el color principal.

### Accent

Color de acento reservado para detalles de alto valor visual, indicadores puntuales y énfasis tecnológico. No deberá dominar grandes superficies ni sustituir al color principal.

### Background

Color base de las páginas. Debe ofrecer una superficie cómoda, estable y con contraste suficiente respecto al contenido.

### Surface

Color de superficies elevadas o agrupadas, como tarjetas, paneles, formularios y secciones diferenciadas sobre el fondo general.

### Surface Dark

Superficie oscura destinada a secciones de alto contraste, bloques de marca y contextos visuales especiales. Todo contenido ubicado sobre ella deberá mantener legibilidad accesible.

### Text Primary

Color principal para títulos, texto esencial y contenido de alta importancia. Debe alcanzar el mayor nivel de contraste dentro de cada superficie.

### Text Secondary

Color para descripciones, metadatos y contenido complementario. Debe diferenciar jerarquías sin comprometer la legibilidad.

### Border

Color para divisores, contornos de campos, límites de tarjetas y separadores. Su presencia debe ser perceptible sin generar ruido visual.

### Success

Color semántico para confirmar operaciones exitosas, estados completados y resultados positivos. Siempre deberá acompañarse de texto o iconografía.

### Warning

Color semántico para advertencias, precauciones y situaciones que requieren atención sin representar un error definitivo.

### Error

Color semántico para errores, acciones destructivas y validaciones fallidas. No deberá utilizarse únicamente como decoración ni depender solo del color para comunicar.

### Neutral Scale

Escala neutral destinada a fondos, superficies, bordes, estados desactivados y diferentes niveles de texto. Deberá incluir suficientes niveles para construir jerarquía en contextos claros y oscuros, evitando diferencias tan sutiles que resulten imperceptibles.

Los colores semánticos conservarán su significado en todo el sistema. Ninguna combinación se aprobará sin verificar su contraste en estados predeterminados, interactivos y desactivados.

## Tipografía

No se selecciona todavía una familia tipográfica. La elección futura deberá ofrecer alta legibilidad, variedad de pesos, buen rendimiento digital y soporte completo para los idiomas previstos.

La jerarquía no dependerá únicamente del tamaño: combinará escala, peso visual, altura de línea, espaciado y ubicación. El espaciado entre letras deberá preservar la lectura natural y evitar tanto la compresión excesiva como la separación decorativa.

### Hero

- **Peso visual:** alto o muy alto, con presencia dominante.
- **Espaciado:** compacto entre letras y controlado entre líneas.
- **Altura de línea:** ajustada para mantener unidad en mensajes breves.
- **Jerarquía:** nivel de mayor impacto, reservado para la propuesta principal de una página.

### H1

- **Peso visual:** alto.
- **Espaciado:** compacto, sin afectar caracteres acentuados.
- **Altura de línea:** ajustada.
- **Jerarquía:** título principal que identifica el propósito único de la página.

### H2

- **Peso visual:** alto o semialto.
- **Espaciado:** neutro o ligeramente compacto.
- **Altura de línea:** equilibrada.
- **Jerarquía:** encabezado de las secciones principales.

### H3

- **Peso visual:** semialto.
- **Espaciado:** neutro.
- **Altura de línea:** equilibrada.
- **Jerarquía:** división interna de una sección o título de un grupo relevante.

### H4

- **Peso visual:** medio o semialto.
- **Espaciado:** neutro.
- **Altura de línea:** cómoda.
- **Jerarquía:** título de componentes, tarjetas o subsecciones breves.

### Body Large

- **Peso visual:** regular o medio.
- **Espaciado:** natural.
- **Altura de línea:** amplia.
- **Jerarquía:** introducciones, extractos y párrafos que requieren énfasis moderado.

### Body

- **Peso visual:** regular.
- **Espaciado:** natural.
- **Altura de línea:** amplia y constante para lectura continua.
- **Jerarquía:** estilo principal para párrafos, descripciones y contenido general.

### Small

- **Peso visual:** regular o medio según el contexto.
- **Espaciado:** natural.
- **Altura de línea:** suficiente para conservar claridad.
- **Jerarquía:** información secundaria que continúa siendo funcional.

### Caption

- **Peso visual:** regular o medio.
- **Espaciado:** ligeramente abierto cuando mejore la lectura.
- **Altura de línea:** compacta, pero nunca comprimida.
- **Jerarquía:** pies de imagen, etiquetas auxiliares y metadatos breves.

### Button

- **Peso visual:** medio o semialto.
- **Espaciado:** natural.
- **Altura de línea:** compacta y centrada dentro del control.
- **Jerarquía:** texto breve que expresa una acción concreta; no deberá usar mayúsculas sostenidas por defecto.

### Link

- **Peso visual:** regular o medio.
- **Espaciado:** coherente con el texto que lo rodea.
- **Altura de línea:** igual a la del contexto.
- **Jerarquía:** deberá distinguirse mediante color y otra señal visible, especialmente al recibir foco o interacción.

Las escalas deberán adaptarse progresivamente al tamaño de pantalla sin perder las relaciones jerárquicas. El texto general nunca se reducirá para compensar una composición deficiente.

## Espaciado

Se adopta oficialmente un sistema de 8 puntos. La escala incorpora valores intermedios y reducidos para controles compactos, pero la composición general deberá favorecer múltiplos de ocho.

| Nivel | Uso principal |
| --- | --- |
| 4 | Separación mínima entre iconos y texto, elementos estrechamente relacionados o ajustes internos compactos. |
| 8 | Espacio base entre elementos pequeños, controles relacionados y contenido interno mínimo. |
| 12 | Separación intermedia en controles, etiquetas y grupos compactos que requieren más aire. |
| 16 | Espaciado interno habitual de componentes pequeños y separación estándar entre elementos relacionados. |
| 24 | Espaciado interno de tarjetas, grupos de formulario y bloques de contenido próximos. |
| 32 | Separación entre grupos relevantes y espaciado interno amplio de componentes. |
| 40 | Transición entre bloques medianos o composiciones con mayor necesidad de respiración. |
| 48 | Separación entre subsecciones y áreas destacadas en pantallas pequeñas o medianas. |
| 64 | Espaciado vertical habitual entre secciones principales. |
| 80 | Separación amplia para secciones relevantes en pantallas grandes. |
| 96 | Ritmo vertical de secciones de alto impacto, cuando la composición y el contenido lo justifiquen. |
| 128 | Separación excepcional para aperturas, cierres o bloques de gran escala en pantallas amplias. |

Los valores no deberán elegirse de manera arbitraria. La cercanía expresará relación; una separación mayor expresará cambio de grupo, contexto o jerarquía.

## Border Radius

La curvatura deberá comunicar modernidad y cercanía sin producir una estética infantil. Cada nivel tendrá un propósito estable.

- **None:** sin curvatura; útil en divisores, tablas, composiciones continuas o elementos que deban alinearse con los límites de una superficie.
- **Small:** curvatura discreta para etiquetas, campos compactos y controles pequeños.
- **Medium:** valor predeterminado para campos, botones y tarjetas funcionales.
- **Large:** tarjetas destacadas, paneles y elementos visuales con mayor presencia.
- **XL:** contenedores promocionales, imágenes o bloques de gran tamaño.
- **Pill:** controles alargados, filtros, etiquetas y acciones cuya forma ayude a diferenciarlos.
- **Full:** elementos circulares, avatares, indicadores o controles de proporción cuadrada.

No se mezclarán niveles sin una razón de jerarquía o composición.

## Sombras

Las sombras comunicarán elevación y separación, no decoración. Deberán ser suaves, coherentes con la dirección de luz y visibles en la superficie donde se apliquen.

- **XS:** separación mínima para controles, pequeños indicadores o elementos apenas elevados.
- **SM:** tarjetas estándar y elementos interactivos en reposo.
- **MD:** menús desplegables, barras flotantes y tarjetas destacadas.
- **LG:** modales, paneles superpuestos y elementos que deban separarse claramente del contenido.
- **XL:** capas de máxima elevación o composiciones promocionales excepcionales.

Los bordes podrán reemplazar a una sombra cuando ofrezcan una separación más limpia. No se acumularán sombras intensas ni se usarán para compensar una jerarquía deficiente.

## Grid

### Container

El contenedor principal centrará el contenido y mantendrá márgenes laterales seguros. Podrá ser fluido en pantallas pequeñas y limitado en pantallas grandes.

### Max Width

El ancho máximo se definirá durante la validación visual. Deberá evitar líneas de texto demasiado extensas y conservar una composición equilibrada en monitores amplios.

### Breakpoints

Los puntos de quiebre responderán a necesidades reales del contenido, no a modelos específicos de dispositivos. Se alinearán con las categorías oficiales de respuesta: móvil, tableta, portátil, escritorio y escritorio grande.

### Columnas

- En móvil se priorizará una estructura de cuatro columnas.
- En tableta se utilizará una estructura de ocho columnas.
- En portátil y escritorio se utilizará una estructura de doce columnas.
- En escritorio grande se conservarán doce columnas dentro del ancho máximo.

Los componentes podrán ocupar combinaciones distintas, siempre que mantengan alineación y jerarquía.

### Espaciado interno

Los márgenes y espacios entre columnas crecerán progresivamente según el espacio disponible. Se utilizarán valores de la escala oficial y se evitará que el contenido toque los bordes de la pantalla.

## Responsive

### Mobile

Es el punto de partida. Debe priorizar lectura, acciones esenciales, navegación simple, controles táctiles cómodos y carga eficiente.

### Tablet

Debe aprovechar el ancho adicional sin convertir automáticamente todas las composiciones en múltiples columnas. Se revisarán orientación, alcance táctil y densidad de contenido.

### Laptop

Permitirá composiciones más amplias, navegación completa y mayor densidad, preservando una lectura cómoda y recorridos claros.

### Desktop

Optimizará la distribución horizontal, los espacios y la relación entre contenido principal y complementario sin dispersar la atención.

### Large Desktop

Mantendrá el contenido dentro del ancho máximo y utilizará el espacio adicional como margen o soporte visual. No deberá estirar texto, imágenes ni controles de manera innecesaria.

La experiencia deberá conservar funciones y contenido esencial en todos los tamaños. La adaptación no consistirá únicamente en reducir dimensiones, sino en reorganizar prioridades.

## Iconografía

- **Estilo:** geométrico, limpio, contemporáneo y fácil de reconocer.
- **Grosor:** uniforme dentro de cada familia y visualmente equilibrado con la tipografía.
- **Tamaños:** pertenecientes a una escala limitada y alineados con los controles o textos que acompañen.
- **Colores:** heredarán el color del contexto o utilizarán colores semánticos cuando comuniquen un estado.
- **Consistencia:** se empleará una sola familia principal; no se mezclarán iconos rellenos, lineales o de estilos incompatibles.

Los iconos funcionales deberán incluir una etiqueta visible o accesible cuando su significado no sea universal. No se usarán como único medio para comunicar un estado crítico.

## Ilustraciones

- **Mockups:** limpios, realistas y centrados en interfaces relevantes.
- **Dashboards:** ordenados, con datos creíbles, jerarquías claras y gráficos comprensibles.
- **Dispositivos:** actuales, proporcionados y presentados en contextos de uso natural.
- **Escenas:** profesionales, luminosas y relacionadas con problemas reales de los clientes.
- **Personas:** diversas, auténticas y representadas con respeto, sin gestos artificiales.
- **Oficinas:** modernas y funcionales, sin lujo innecesario ni entornos alejados del público objetivo.

Las ilustraciones deberán compartir perspectiva, nivel de detalle, tratamiento de luz y paleta. Se evitarán personajes infantiles, efectos tridimensionales excesivos, escenas saturadas, interfaces ficticias incoherentes y recursos genéricos sin relación con el contenido.

## Fotografías

- **Iluminación:** natural o cuidadosamente controlada, con contraste suficiente y sin filtros agresivos.
- **Composición:** limpia, intencional y con espacio disponible para integrar contenido cuando corresponda.
- **Colores:** neutrales o compatibles con la paleta de JT Labs, evitando dominantes que compitan con la interfaz.
- **Calidad:** alta resolución, enfoque correcto y reproducción adecuada en distintos tamaños y densidades de pantalla.
- **Estilo:** auténtico, actual, profesional y cercano a los contextos de negocios locales y productos digitales.

Se evitarán fotografías genéricas de baja calidad, poses forzadas, escenarios artificiales, imágenes desactualizadas y representaciones que no aporten información o credibilidad.

## Botones

Todos los botones deberán tener texto de acción claro, área de interacción suficiente y estados distinguibles sin depender exclusivamente del color.

### Variantes

- **Primary:** acción principal de una vista o sección. Su uso debe ser limitado para conservar jerarquía.
- **Secondary:** acción importante que acompaña a la principal sin competir con ella.
- **Outline:** acción de prioridad media sobre fondos simples, definida principalmente por su contorno.
- **Ghost:** acción contextual de baja prioridad, sin superficie permanente.
- **Link:** acción visualmente ligera para navegación o tareas complementarias.
- **Danger:** acción destructiva o de consecuencias relevantes; deberá expresar claramente el resultado.

### Estados

- **Default:** apariencia base con contraste y jerarquía correctos.
- **Hover:** cambio sutil que confirma interactividad sin desplazar el contenido.
- **Focus:** indicador visible, consistente y con contraste suficiente para navegación por teclado.
- **Pressed:** respuesta inmediata que comunica activación.
- **Disabled:** estado no interactivo claramente distinguible; deberá usarse solo cuando el motivo resulte comprensible.
- **Loading:** conserva dimensiones, bloquea acciones repetidas e informa que la operación está en curso.

## Inputs

Los campos deberán incluir etiqueta persistente, instrucciones cuando sean necesarias, área de interacción cómoda y mensajes de validación específicos. El texto de ejemplo no sustituirá a la etiqueta.

- **Text:** acepta información breve y muestra con claridad formato, estado y errores.
- **Email:** utiliza teclado y validación apropiados sin rechazar formatos válidos de manera arbitraria.
- **Phone:** facilita el ingreso de prefijo y número, considerando formatos internacionales.
- **Textarea:** permite contenido extenso, muestra el espacio disponible y ofrece conteo cuando exista un límite.
- **Select:** presenta opciones comprensibles, navegación por teclado y selección actual visible.
- **Checkbox:** permite una o varias elecciones independientes y amplía la interacción a su etiqueta.
- **Radio:** representa opciones mutuamente excluyentes y muestra el grupo completo cuando sea viable.
- **Switch:** cambia un estado inmediato y binario; no debe utilizarse para acciones que requieren confirmación posterior.

Los estados de reposo, interacción, foco, contenido válido, error y desactivación deberán ser consistentes entre todos los campos.

## Cards

Las tarjetas agruparán información relacionada y deberán mantener estructura, espaciado y acciones predecibles.

- **Service Card:** resume un servicio, su beneficio principal y el acceso a información adicional o contacto.
- **Project Card:** presenta imagen, contexto, tipo de proyecto y acceso al caso completo.
- **Feature Card:** explica una capacidad o ventaja mediante título, descripción breve e iconografía opcional.
- **Testimonial Card:** muestra una declaración verificable, autor, rol y organización cuando exista autorización.
- **Pricing Card:** organiza nombre del plan, precio, condiciones, beneficios y acción principal con comparaciones claras.
- **Blog Card:** presenta título, resumen, categoría, fecha, imagen opcional y acceso al artículo.

No toda agrupación necesita una tarjeta. Se evitarán contenedores anidados, alturas forzadas sin beneficio y áreas completas aparentemente interactivas cuando solo una acción lo sea.

## Navegación

### Navbar

Mostrará la identidad, las rutas principales y una acción relevante. Deberá indicar la ubicación actual, mantener una jerarquía estable y adaptarse sin saturación.

### Footer

Reunirá rutas secundarias, contacto, información legal y otros recursos útiles. No repetirá contenido sin propósito ni se convertirá en un directorio desordenado.

### Sidebar futura

Se reservará para productos o áreas con navegación profunda. Deberá admitir jerarquías, estados expandidos y orientación por teclado.

### Mobile Menu

Ofrecerá acceso claro a las rutas esenciales, control visible para abrir y cerrar, gestión correcta del foco y bloqueo de interacción con el contenido cubierto.

### Breadcrumb futura

Mostrará la posición dentro de jerarquías profundas y permitirá regresar a niveles anteriores. No sustituirá al título de página ni a la navegación principal.

## Feedback

Toda respuesta del sistema deberá ser oportuna, comprensible y proporcional a la importancia de la acción.

- **Toast:** confirmación breve y no bloqueante; no se utilizará para información crítica que desaparezca.
- **Alert:** mensaje persistente relacionado con una sección o estado que requiere atención.
- **Modal:** interrupción enfocada para decisiones importantes o tareas breves; deberá emplearse con moderación.
- **Drawer:** panel lateral o inferior para tareas contextuales que necesiten más espacio sin abandonar la vista.
- **Empty State:** explica por qué no hay contenido y ofrece una acción útil cuando corresponda.
- **Loading:** comunica que una operación está activa y evita interacciones duplicadas.
- **Skeleton:** representa temporalmente la estructura esperada cuando la espera sea perceptible y el formato sea predecible.

Los mensajes deberán explicar qué ocurrió y, cuando sea posible, cómo continuar.

## Motion

- **Duración:** breve para respuestas directas y moderada para transiciones de mayor escala. Deberá ser proporcional a la distancia y complejidad.
- **Suavidad:** las aceleraciones y desaceleraciones deberán sentirse naturales, sin movimientos abruptos.
- **Microinteracciones:** confirmarán acciones, cambios de estado y relaciones entre elementos.
- **Hover:** será sutil y complementario; ninguna función esencial dependerá de este estado.
- **Scroll:** ayudará a revelar jerarquías sin secuestrar el desplazamiento ni dificultar la orientación.
- **Carga:** comunicará progreso con estabilidad visual y sin animación innecesaria.

Se evitarán animaciones decorativas repetitivas, parpadeos, rebotes excesivos, transiciones largas, movimientos que bloqueen acciones y efectos que puedan provocar mareo o distraer del contenido.

## Accesibilidad

- **Contraste:** texto, iconos funcionales, controles y estados deberán cumplir los criterios aplicables de WCAG en el nivel objetivo definido para el proyecto.
- **Focus Visible:** todo elemento interactivo deberá mostrar un indicador de foco perceptible y consistente.
- **ARIA:** se utilizará únicamente cuando la semántica nativa no sea suficiente, con nombres, estados y relaciones correctos.
- **Teclado:** todas las acciones deberán estar disponibles sin ratón y seguir un orden de foco lógico.
- **Screen Readers:** la estructura, las etiquetas, los mensajes y los cambios dinámicos deberán ser comprensibles para lectores de pantalla.
- **Preferencias de movimiento:** se respetará la preferencia de movimiento reducido, eliminando o simplificando efectos no esenciales.

La accesibilidad será un requisito de diseño, contenido y validación, no una corrección posterior.

## SEO

- **Jerarquía:** la estructura visual deberá reflejar el orden lógico de la información y facilitar la exploración.
- **Headings:** cada página tendrá un título principal claro y niveles posteriores ordenados, sin elegirlos por apariencia.
- **Contenido:** los textos importantes deberán existir como contenido real, ser legibles y responder a la intención de la persona visitante.
- **Performance:** la experiencia visual deberá evitar recursos que perjudiquen tiempos de carga, estabilidad o capacidad de interacción.

El diseño no deberá ocultar información esencial en imágenes, interacciones innecesarias o elementos inaccesibles para buscadores y personas.

## Performance

- **Lazy Loading:** se aplicará a recursos fuera de la vista inicial cuando no afecte el contenido prioritario ni cause saltos visuales.
- **Optimización:** cada recurso deberá justificar su peso y complejidad; se evitarán dependencias visuales innecesarias.
- **Imágenes:** utilizarán dimensiones adecuadas, formatos eficientes, variantes responsivas y proporciones reservadas.
- **Fuentes:** se limitarán familias, pesos y estilos; su carga no deberá bloquear innecesariamente la experiencia.
- **Animaciones:** priorizarán propiedades eficientes y evitarán cálculos, repintados o recursos excesivos.

El rendimiento percibido y medible forma parte de la calidad visual. Las decisiones se validarán en dispositivos y conexiones representativas del público objetivo.

## Reutilización

El sistema se construirá a partir de componentes reutilizables, pequeños y combinables. Cada componente deberá resolver una responsabilidad clara, ofrecer variantes justificadas y conservar comportamiento consistente en todos sus usos.

Antes de crear un componente nuevo, se evaluará si una variante o composición de elementos existentes resuelve la necesidad. Las diferencias de contenido no justifican duplicar estructuras ni estilos.

La reutilización no implica crear componentes genéricos sin límites. Las abstracciones deberán surgir de patrones comprobados, con propiedades comprensibles, estados documentados y una interfaz coherente.

## Futuros Design Tokens

Todos los valores visuales se centralizarán posteriormente como tokens de diseño en:

`src/theme/`

Allí vivirán las definiciones de color, tipografía, espaciado, radios, sombras, puntos de quiebre, movimiento y otras decisiones compartidas. En esta sprint no se define su estructura de archivos, formato, nombres técnicos ni implementación.

Los tokens deberán representar decisiones semánticas y permitir cambios globales sin duplicación. Su futura implementación mantendrá una fuente única de verdad entre diseño y desarrollo.

## Reglas finales

Las siguientes reglas son obligatorias:

- No duplicar estilos.
- No crear componentes específicos cuando uno genérico pueda resolver el problema.
- Mobile First.
- Accesibilidad obligatoria.
- Performance primero.
- Código en inglés.
- Contenido en español.
- Componentes pequeños.
- Arquitectura modular.
- Documentar decisiones importantes.
