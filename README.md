# Angular16-Interceptor 
 Ejemplos de 3 interceptor en Angular 16


En Angular, l**os interceptores de solicitudes HTTP son una característica poderosa que permite al desarrollador manipular las solicitudes HTTP** y las respuestas antes de que lleguen a los controladores de solicitudes o después de que salgan de ellos. Los interceptores se implementan como servicios y se utilizan para realizar tareas comunes, como agregar encabezados a las solicitudes, manipular errores, modificar solicitudes o respuestas, y más.

**Características clave de los interceptores HTTP en Angular:**

Implementación como Servicio:

Los interceptores se implementan como servicios que extienden la interfaz HttpInterceptor. Esto implica la implementación del método intercept().

Múltiples Interceptores:

Puedes tener múltiples interceptores en una aplicación Angular, y estos se ejecutarán en el orden en que se proporcionen.

Manipulación de Solicitudes y Respuestas:

Los interceptores permiten la manipulación tanto de las solicitudes antes de ser enviadas como de las respuestas antes de llegar al código que las invocó.

Uso común:

Los interceptores son útiles para tareas como agregar encabezados de autenticación, manejar errores globales, modificar solicitudes o respuestas, y otras tareas de manejo global.


**Interceptores más comunes en Angular:**

HttpInterceptor: Es la interfaz principal que los interceptores deben implementar. Proporciona dos métodos, intercept y interceptResponse, que permiten manipular las solicitudes y respuestas HTTP respectivamente.

HttpHeadersInterceptor: Se utiliza para agregar encabezados HTTP a todas las solicitudes. Puedes configurar encabezados comunes, como encabezados de autenticación, en este interceptor.

HttpParamsInterceptor: Agrega parámetros a todas las solicitudes HTTP. Es útil para agregar parámetros comunes a todas las solicitudes, como tokens de autenticación.

HttpErrorInterceptor: Intercepta errores en las respuestas HTTP. Permite manejar errores de manera centralizada y realizar acciones, como redireccionar a una página de error.

HttpLoggingInterceptor: Intercepta las solicitudes y respuestas para registrar información de registro. Puede ser útil para depurar y rastrear las solicitudes y respuestas HTTP en la consola.

HttpCachingInterceptor: Implementa lógica de almacenamiento en caché para las solicitudes HTTP. Puede gestionar el almacenamiento en caché de respuestas y reutilizar respuestas almacenadas en caché para solicitudes idénticas.

HttpTokenInterceptor: Agrega tokens de autenticación a las solicitudes HTTP. Puede ser utilizado para manejar la autenticación de manera centralizada.

HttpErrorHandlingInterceptor: Maneja errores HTTP específicos y toma decisiones basadas en el código de estado. Puede ser utilizado para redirigir a páginas de error personalizadas o realizar acciones específicas según el tipo de error.


Además, conocerás una funcionalidad avanzada, para crear interceptos personalizados en servicios personalizados, cubriendo una parte importante, ya que en el ejemplo, podrás crear un interceptor personalizado para una llamada en concreto y no aplicarse de forma global a todo el proyecto de Angular.




