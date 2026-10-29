# Fuga / Vice City — Oír la luz

## 1. Concepto y relación imagen–sonido

**Fuga / Vice City** convierte el movimiento de una autopista nocturna en una mezcla de tráfico imaginado. No pretende reconstruir el sonido documental de la imagen: propone una **traducción**. Las luces traseras, los cambios de carril y las zonas de mayor movimiento se escuchan como capas de asfalto, vehículos cercanos, lluvia y flujo urbano.

La experiencia busca que la persona escuche la carretera como una partitura de luces: una retícula de **bloques de seguimiento de movimiento** divide la imagen. Un auto que se mueve dentro de un recuadro dispara una capa sonora, abre el panorama y genera un destello. La atmósfera de Vice City es una referencia visual y afectiva —rojo, magenta, asfalto mojado, radio nocturna—; no utiliza canciones, personajes ni audio del videojuego.

## 2. Banco de sonidos y disparador

El banco contiene ocho muestras breves de carretera y tráfico. Se descargaron desde la colección de efectos de tráfico de Mixkit. En la ficha pública de estos recursos el creador individual no aparece acreditado; por eso se consigna a continuación como “no indicado por Mixkit”, sin inventar una autoría. La licencia permite integrar los efectos en proyectos audiovisuales: [Mixkit Sound Effects Free License](https://mixkit.co/license/modal/sfxFree/).

| Sonido en la plataforma | Archivo | Origen / autor acreditado | Licencia | Papel sonoro |
| --- | --- | --- | --- | --- |
| Tráfico nocturno | `sonidos/trafico-nocturno.mp3` | Mixkit / no indicado | Mixkit Sound Effects Free License | Capa urbana distante |
| Asfalto / flujo | `sonidos/autopista.mp3` | Mixkit / no indicado | Mixkit Sound Effects Free License | Tránsito continuo de carretera |
| Vehículo al paso | `sonidos/vehiculo-paso.mp3` | Mixkit / no indicado | Mixkit Sound Effects Free License | Cercanía y adelantamiento |
| Lluvia + tráfico | `sonidos/lluvia-trafico.mp3` | Mixkit / no indicado | Mixkit Sound Effects Free License | Cabina húmeda y reflejos |
| Ruta húmeda | `sonidos/ruta-humeda.mp3` | Mixkit / no indicado | Mixkit Sound Effects Free License | Fondo de autopista mojada |
| Ciudad distante | `sonidos/ciudad-distante.mp3` | Mixkit / no indicado | Mixkit Sound Effects Free License | Tránsito urbano lejano |
| Frenos de ruta | `sonidos/frenos-ruta.mp3` | Mixkit / no indicado | Mixkit Sound Effects Free License | Tensión de atasco y frenada |
| Noche urbana | `sonidos/noche-urbana.mp3` | Mixkit / no indicado | Mixkit Sound Effects Free License | Capa nocturna de transición |

Los tres videos base son archivos de uso libre provenientes de Pexels: `rear-lights.mp4` (Coverr/Pexels), `aerial-highway.mp4` (Evgenij Mikhailov/Pexels) y `night-jam.mp4` (Leonard Ferhati/Pexels). Se reproducen sin su audio original.

### Regla de disparo / mapping

1. Cada fotograma se reduce a una imagen de baja resolución y se compara con el anterior.
2. La persona define la cantidad de **columnas y filas**; cada cruce es un bloque de seguimiento.
3. Un píxel cuenta como cambio cuando supera el **umbral por píxel**. Solo se suman los cambios que ocurren dentro de cada bloque.
4. Cuando el movimiento de un bloque supera la **sensibilidad**, dispara su muestra del banco. **Entre repeticiones** evita disparos continuos mientras un mismo auto se mantiene dentro del recuadro.
5. Con los switches activos, la **intensidad → volumen** y la **posición horizontal → pan**. Cada bloque dispara una capa diferente de la ruta.

Así, la carretera no “suena como es”: la imagen de tráfico produce una composición con reglas perceptibles y modificables. Si se carga una canción MP3, la conexión se vuelve bidireccional: la canción entra a la misma mezcla y su energía modifica el brillo, contraste y velocidad de reproducción del video; a la vez, el movimiento del video dispara las capas del banco.

## 3. Parámetros y gráfica

| Parámetro | Decisión dentro del concepto |
| --- | --- |
| Fuente | Permite elegir retrovisor, vista aérea, atasco o un archivo local. Una canción MP3 cargada se reproduce en bucle y reacciona visualmente sobre el video. |
| Columnas y filas | Convierten la carretera en un instrumento: más bloques distinguen mejor distintas trayectorias y carriles. |
| Umbral, sensibilidad y repetición | Separan destellos mínimos de un cambio relevante y regulan la densidad del atasco sonoro. |
| Volumen, attack y release | Definen si la ciudad entra como un golpe de freno o como una estela de luces sobre asfalto mojado. |
| Filtro pasa-bajos y reverb | El filtro simula una cabina cerrada o una ruta abierta; la reverb aleja el tráfico y construye profundidad nocturna. |
| Pan y velocidad | El pan responde a la posición de la imagen; cada muestra también cambia ligeramente su velocidad según la intensidad del movimiento y el control **velocidad**. |

La gráfica usa negro profundo, rojo de luces traseras, magenta nocturno y ámbar de señalética. El video domina la composición porque es el disparador; debajo, la consola funciona como tablero de ruta. El número rojo mide la energía visual; los bloques se iluminan al detectar movimiento y el osciloscopio muestra la forma de onda de la mezcla. La lista de eventos funciona como una partitura mínima: deja una huella de qué bloque y qué capa se escuchó.

### Capturas para la entrega

Antes de entregar, agrega aquí tres capturas propias de la plataforma en uso:

1. Interfaz completa con **RETROVISOR** activo y el osciloscopio visible.
2. Una cuadrícula de varias filas con una zona cian disparada.
3. La lista de eventos y un banco de ruta distinto seleccionado.

Esto permite documentar que las decisiones gráficas y el sistema funcionan en la versión final publicada.

## 4. Reflexión

Al traducir una carretera en movimiento a sonido, descubrí que una misma luz puede leerse como velocidad, distancia, lluvia o peligro. El sistema no oye autos: oye diferencias entre fotogramas. Por eso un reflejo de neón puede convertirse en un vehículo cercano y un atasco casi inmóvil puede sonar menos que una cámara que vibra. La pieza hace visible que toda escucha automatizada es una interpretación diseñada.

Quedan fuera de esta escucha el destino de los vehículos, las conversaciones dentro de los autos, el olor de la lluvia, la diferencia real entre un reflejo y un faro, y el contexto emocional de una fuga. El sistema también depende de luz, contraste y calidad del video: no reconoce objetos, solo cambio.

Mejoras concretas:

1. Detectar color y separar faros blancos, luces traseras rojas y señalética ámbar para asignar un banco específico a cada fenómeno.
2. Reemplazar parte del banco por grabaciones propias desde el interior de un automóvil, con versiones seca y lluviosa del mismo trayecto.
3. Publicar la versión final en GitHub Pages y registrar una toma de 30–60 segundos donde se vea el cambio entre video, zona, evento y sonido.

## Uso

Abre `index.html` y pulsa **ACTIVAR SONIDO**. Desde ese momento, los autos o movimientos dentro de los bloques activan los sonidos por detección. Activa **mostrar bloques detectores** para calibrar la sensibilidad y luego se pueden ocultar para la experiencia final. Para usar MIDI, sirve el proyecto desde `localhost` o GitHub Pages (HTTPS). Para cargar material propio usa **CARGAR VIDEO / MP3**.
