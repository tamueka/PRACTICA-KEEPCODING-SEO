# PRACTICA-KEEPCODING-SEO

## Curriculum Vitae Samuel Ruiz de la Rosa FULLSTACK JAVASCRIPT MEAN

### OPTIMIZACION ON PAGE SEO

---

#### ETIQUETAS TITLE, DESCRIPTION, URL

TITLE: Descripción única de mi contenido engloba a todo eldocumento

DESCRIPTION: name=“description” content=“¿Qué es una description? Toda la 
información sobre las etiquetas description y como se deben usar, Sigue 
leyendo en Keepcoding.io”

URL: http://rey.rockstardevops.com/

Las urls deben ser únicas

Mejor absolutas que relativas 

Sin mayúsculas

Sin barra bajas 

Con guión medio 

Los espacios son guiones medios

Sin caracteres especiales como “ñ”, o “^”… 

Urls que sean contenedor de contenido dinámico 

NO se borran si tienen tráfico o tienen enlaces, se redireccionan conun 301

KEYWORDS: name=“keywords” content=“uso solo una palabra, ya no posiciona”

Para medir la longitud en caracteres recomiendo usar:

https://seomofo.com/snippet-optimizer.html

Ver resultado:

![Image of Google SERP Snippet Optimization Tool](http://rey.rockstardevops.com/img/seo.png)

---

#### ENCABEZADO

Utilizar una correcta jerarquia es muy importante para el SEO

Es muy importante solo utilizar un H1 por pagina

h1 h2 h3 h4 h5 h6

---

#### IMAGENES

Nombre descriptivo

Imágenes originales

Uso de alt – En caso de error de carga 

Uso de title – Título en amarillo

Cuida el peso de la imagen

Incluye las dimensiones de la imagen 

Tráfico a través de Google Image – Cuida el SEO 

img src=“” alt=“” title=“”

---

#### METAKEYWORDS

Google no las tiene en cuenta desde 2009
Ni penalizan, ni posicionan. Insisto: no sirven para nada
Te ayuda a conocer las palabras clave de tus competidores 

---

#### DOFOLLOW , NO FOLLOW
 
a rel="nofollow" target="_blank" title="marca" href="http://www.marca.com" id="logo-el-mundo" class="ir"

Es una etiqueta exclusiva para enlaces

Nofollow = no sigo rastreando y no paso autoridad

Usamos nofollow cuando hay enlaces de pago 

---

#### PROMINENCIA ON PAGE

1. Title
2. H1, h2,h3…h6
3. Description (NO factor SEO)
4. URL
5. In links & Out Links (Enlaces externos mejor pocos pero buenos que muchos y malos)
6. 300-500 palabras
7. Sinónimos kw
8. Alt imágenes
9. Recursos externos (Imágenes & vídeos)
10. Negritas 

---

#### CODIGOS DE ESTADO HTTP

200 OK/Success

301 Redirección Permanente 

302 Redirección Temporal 

404 No encontrada

403 Forbidden  

410 Ya no disponible - Ni está ni se la espera 

500 Error del Servidor

503 Servicio no disponible – Importante!! Para que Google entienda que  estamos trabajando en el Servidor 

---

#### ERROR 404

Creamos una web de error 404 amigable:
http://rey.rockstardevops.com/404.html

---

#### CANONICAL
2 o + URL distintas, y mismo contenido
 
Elegir URL preferida = https://example.com/

Colocar este código en el <head>  para indicar nuestra URL preferida:
link rel="canonical" href="http://www.cuidateplus.com/alimentacion/diccionario/leche.html"

1 única URL
**Su HTML debe llevar la etiqueta «canonical» hacía sí
misma. Es decir en el enlace de la URL exacta. 

----

#### HREFLANG

Dadas 2 urls con contenido traducido a otro idioma debemos indicárselo a google, en la cabecera 
HTML.

http://www.dominio.com/en/ 
ESTRUCTURA de URLs para diferentes idiomas 
META ETIQUETAS –>  rel="alternate" hreflang="x" 
En la cabecera de cada versión de HTML  <head> se deben identificar todas las versiones incluso en 
 la que estás 
Etiquetas para señalar diferentes idiomas o regiones 
 
Utilizamos subdirectorios gTLD
link  rel="alternate"  hreflang="x-default"  href="http://example.com/"
link  rel="alternate"  hreflang="de"  href="http://example.com/de/" 
link  rel="alternate"  hreflang="de-DE"  href="http://example.com/de-de/" 

---

#### SITEMAP

Es un archivo que permite ordenar de manera sistemática las páginas de una web. Es como el índice de un libro pero para páginas webs.

Permite optimizar el SEO de un sitio web ya que informa a Google y otros motores de búsqueda sobre la organización y la jerarquía del contenido y permite que los buscadores rastreen el sitio de forma más inteligente.

No todas las páginas webs tienen uno, pero es recomendable tenerlo porque permite optimizar el SEO On Page y ayuda a que los buscadores indexen la web más rápido.

Creacion de un sitemap:
https://www.sitemaps.org/es/protocol.html

Web que nos crea sitemap:
https://www.xml-sitemaps.com/

---

####ROBOTS.TXT

Un archivo robots.txt proporciona información a los rastreadores de buscadores sobre las páginas o los archivos que pueden solicitar o no de tu sitio web. Se utiliza, principalmente, para evitar que tu sitio web se sobrecargue con solicitudes; no es un mecanismo para mantener una página web fuera de Google. Con las directivas o etiquetas noindex, puedes mantener una página web fuera de Google o proteger tu página con una contraseña.

Localización en: http://rey.rockstardevops.com//robots.txt 

User-agent: *
Disallow: /example.html
 
Más información: http://www.robotstxt.org/robotstxt.html 

Localización: Se envía en la cabecera HTTP (HTTP 
headers) 
 
X-Robots-Tag: noindex 

Más información http://noarchive.net/xrobots/

Localizado en: Head del Html
 
meta  name="NOMBRE DEL ROBOT"  content="ARGUMENTO" 
       
Más información http://www.robotstxt.org/meta.html 

nofollow (no sigas los links) 

noindex (no indexes)  

noarchive (no archives)
 
noODP (No muestres la descripción de Open Directory Project) 

...O combinados (noindex, nofollow) 
 
Si la etiqueta de robots <META> no esta definida, la forma predeterminada  seria "INDEX,FOLLOW"

Solo los Meta Robots y X-Robots quitan las URLs de los resultados de búsqueda, el robots.txt no pemite la entrada
 
No bloquees archivos CSS ni JavaScript en el robots.txt
 
Robots.txt es usado para que no rastree no para que no indexe 

---

#### GOOGLE WEBMASTER TOOL

Verficamos la propiedad de nuestra web

Para comprobar que indexamos todo lo que enviamos tenemos la herramienta GOOGLE WEBMASTER TOOL

Comprobamos errores en genral de nuestra web y del sitemap.xml en particular

---

#### WPO (Web Performance Optimization) 

Comprobamos velocidad de carga y demás parametros:

https://developers.google.com/speed/

https://gtmetrix.com/

https://www.webpagetest.org/

https://tools.pingdom.com/
