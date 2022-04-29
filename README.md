# Schedule App
Este repositorio corresponde al proyecto asignado en la sesión del día 27 de abril de 2022, en el bootcamp de [backend fundamentals](https://www.tzuzulcode.com/bootcamps/32).

## Correr
Antes de probar localmente, se debe tener lo siguiente:

- [Node.js](https://nodejs.org)
- [Git](https://git-scm.com/)
- [XAMPP](https://www.apachefriends.org/es/index.html)

Una vez hemos verificado que tenemos lo necesario, podemos clonar el repositorio e instalar las dependencias.

```bash
git clone https://github.com/dilmorja/schedule-app.git
```
```bash
npm install
```

Por último, podemos ejecutar la aplicación.

```bash
npm start
```

## Estructura relacional de datos
![Schedule app data structure](https://i.imgur.com/VEFs3Cd.png)

## Rutas

|  Method  |   Route   |      Root       |        Description       | Finished |
|:--------:|:---------:|:---------------:|:------------------------:|:--------:|
| `GET`    | `/`       | `/`             | Check the API connection | &#10003; |
| `POST`   | `/new`    |`/api`           | Create a new user        | &#10007; |
| `POST`   | `/new`    | `/:user/events` | Create a new event       | &#10007; |
| `DELETE` | `/delete` | `/:user/events` | Delete a event           | &#10007; |
| `PUT`    | `/edit`   | `/:user/events` | Edit a event             | &#10007; |
| `GET`    | `/`       | `/:user/events` | Show events              | &#10007; |
| `PUT`    | `/assign` | `/:user/events` | Assign users to the event| &#10007; |

## Requerimientos
- Lenguaje y runtime: JavaScript. Nodejs.
- DB: SQL.
- Tener buenas prácticas.

## Roadmap
**Backend**:
- [ ] Inicio de sesión
- [ ] Crear usuarios
- [ ] Crear eventos
- [ ] Eliminar eventos
- [ ] Editar eventos
- [ ] Mostrar eventos
- [ ] Asignar usuarios a eventos

**Frontend**:
- [ ] Login screen

## Licencia
[MIT](LICENSE)
