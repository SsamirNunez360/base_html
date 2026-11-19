# Proyecto `personas-laravel` — CRUD de Personas con Laravel

Aplicación web desarrollada en Laravel para la gestión de registros de personas (Crear, Leer, Actualizar y Eliminar) con autenticación de usuarios y persistencia en MySQL.

---

## 1. Conceptos clave con ejemplos del proyecto

* **Migración:** Archivos ubicados en `database/migrations/` (como `create_personas_table.php`) que definen y versionan la estructura de las tablas (`personas` y `users`) en MySQL sin escribir SQL manualmente.
* **Seeder:** Clases en `database/seeders/` (`UsuarioDemoSeeder` y `PersonaSeeder`) que pueblan la base de datos con el usuario administrador de prueba y los registros iniciales de personas[cite: 1, 9].
* **Factory:** Clases en `database/factories/` (como `PersonaFactory`) que permiten generar grandes volúmenes de datos ficticios aleatorios para realizar pruebas.
* **Modelo:** Clases Eloquent en `app/Models/` (`Persona.php` y `User.php`) que representan las tablas de MySQL y permiten manipular los datos mediante objetos PHP, como `Persona::findOrFail($id)`, `$persona->save()` y `$persona->delete()`[cite: 1, 5, 9].
* **Blade:** Motor de plantillas de Laravel (`resources/views/personas/index.blade.php`, `create.blade.php`, `edit.blade.php`) que combina HTML con directivas de control y seguridad como `@extends`, `@forelse`, `@csrf` y `@method`[cite: 3, 7, 9].
* **Sesión:** Mecanismo del servidor que mantiene autenticado al usuario mediante `middleware('auth')` en `routes/web.php` y almacena notificaciones temporales flash usando `->with('exito', '...')` al redirigir[cite: 1, 2, 10].
* **CSRF:** Protección contra falsificación de peticiones en sitios cruzados mediante un token oculto único generado por `@csrf` dentro de cada formulario que modifica datos (`POST`, `PUT` y `DELETE`)[cite: 3, 7, 9].

---

## 2. Métodos HTTP utilizados

* **`GET`:** Solicita vistas o listados al servidor sin alterar la base de datos[cite: 1, 5].
  * *Ejemplo en el proyecto:* `GET /personas` muestra el listado (`PersonaController@index`)[cite: 2, 10], `GET /personas/crear` muestra el formulario de registro (`create`)[cite: 1, 2] y `GET /personas/{id}/editar` carga el formulario de edición (`edit`)[cite: 5, 6].
* **`POST`:** Envía datos nuevos desde un formulario para procesarlos e insertarlos en el servidor[cite: 1, 3].
  * *Ejemplo en el proyecto:* `POST /personas` valida los campos y crea un nuevo registro en MySQL (`PersonaController@store`)[cite: 1, 2], y `POST /login` procesa el inicio de sesión[cite: 2, 10].
* **`PUT`:** Actualiza un recurso ya existente en el servidor[cite: 5]. Como HTML solo soporta `GET` y `POST`, se simula con `@method('PUT')` en `edit.blade.php`[cite: 7].
  * *Ejemplo en el proyecto:* `PUT /personas/{id}` ejecuta `PersonaController@update` para guardar los cambios de una persona conservando su `id`[cite: 5, 6].
* **`DELETE`:** Elimina un registro específico de la base de datos[cite: 9]. Se simula mediante `@method('DELETE')` en el formulario de cada fila en `index.blade.php`[cite: 9].
  * *Ejemplo en el proyecto:* `DELETE /personas/{id}` ejecuta `PersonaController@destroy` para borrar la fila en MySQL[cite: 9, 10].

---

## 3. Flujo de peticiones (Arquitectura MVC)

* **¿Qué archivo recibe la petición?**
  El archivo `routes/web.php` intercepta la URL y el método HTTP enviados desde el navegador, verifica que el usuario tenga sesión activa (`auth`) y delega la solicitud al método correspondiente dentro de `app/Http/Controllers/PersonaController.php`[cite: 1, 2, 10].
* **¿Qué archivo consulta o modifica los datos?**
  El controlador `PersonaController.php` utiliza el modelo Eloquent `app/Models/Persona.php` para comunicarse con la base de datos MySQL (consultando con `orderBy` o `findOrFail`, insertando/actualizando con `save()` o borrando con `delete()`)[cite: 1, 5, 9].
* **¿Qué archivo genera el HTML?**
  Las vistas Blade ubicadas en `resources/views/personas/` (`index.blade.php`, `create.blade.php` y `edit.blade.php`), heredando la estructura base de `resources/views/layouts/app.blade.php`, procesan los datos recibidos del controlador y generan el código HTML final que se envía al navegador[cite: 3, 7, 9].