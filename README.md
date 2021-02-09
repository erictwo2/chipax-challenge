![Chipax](chipax-header.jpg)

### [🤝 Ir a CONTRIBUTING.md para ver las convenciones utilizadas](CONTRIBUTING.md)

### [📖 Ir a CHANGELOG.md para ver el registro de cambios](CHANGELOG.md)

# Chipax Challenge

Este proyecto resuelve la prueba técnica planteada por Chipax para candidatos a Full Stack Developers.

## Criterios
Consultar los `character`, `locations` y `episodes` de [https://rickandmortyapi.com/](https://rickandmortyapi.com) e indicar:
1. Char counter:
    - Cuántas veces aparece la letra **"l"** (case insensitive) en los nombres de todos los `location`.
    - Cuántas veces aparece la letra **"e"** (case insensitive) en los nombres de todos los `episodes`.
    - Cuántas veces aparece la letra **"c"** (case insensitive) en los nombres de todos los `character`.
    - Cuánto tardó el programa 👆 en total.
1. Episode locations:
    - Para cada `episode`, indicar la cantidad y un listado con las `location` (`origin`) de todos los `character` que aparecieron en ese `episode` (sin repetir).
    - Cuánto tardó el programa 👆 en total.

## Demo

 [https://chipax-challenge.ehidalgo.vercel.app](https://chipax-challenge.ehidalgo.vercel.app)

## Tecnologías y estructura de proyecto

Este proyecto esta desarrollado usando [React](https://es.reactjs.org), [Next.js](https://nextjs.org), TypeScript, [GraphQL Request](https://github.com/prisma-labs/graphql-request),
[TailwindCSS](https://tailwindcss.com), [ESLint](https://eslint.org) + [Prettier](https://prettier.io), [Jest](https://jestjs.io), [Husky](https://typicode.github.io/husky) y
[Release It](https://github.com/release-it/release-it). 

Los archivos están estructurados de la siguiente manera:

    .
    ├── public               # Archivos estáticos
    ├── src
        ├── components       # Componentes reutilizables sin estado.  Se organizan de manera lógica y no tienen que tener más de dos niveles de profundidad.
        ├── pages            # Páginas del proyecto.
        ├── services         # Servicios para lógica de negocio y/o comunicación con API's.
        ├── utils            # Herramientas y utilidades varias.
    ├── CHANGELOG.md         # Documenta los cambios del proyecto en formato `Keep a changelog`.
    ├── CONTRIBUTING.md      # Documenta las convenciones utilizadas en este proyecto.
    └── README.md            # La primera página que verá el usuario cuando visite el repositorio.


## Requerimientos
* Yarn
* Git
* Node.js 10.13 en adelante

## Despliegue local

* Clonar repositorio.
* Ejecutar el comando `yarn install`
* Ejecutar el comando `yarn dev`

## Linter
```bash
yarn run lint
```

:exclamation: **Pre-commit Hook**: antes de realizarse cualquier commit se ejecuta un hook que hará comprobaciones de lint. En caso de encontrar algún error, el commit fallara.

## Commits

:exclamation: **Pre-commit Hook**: antes de realizarse cualquier commit se ejecuta un hook que hará comprobaciones de lint en el mensage de dicho commit. En caso de encontrar algún error, el commit fallara.

##### [👉 Leer CONTRIBUTING.md para más información](CONTRIBUTING.md)

## Testing

Las pruebas se crean junto con el nombre del componente, utilizando el mismo nombre y el sufijo `.(.test|.spec).(js|jsx|ts|tsx)`, por ejemplo `header.test.tsx`. Se utiliza **[Jest](https://jestjs.io/)** como Framework de Testing.

En el código se agregó `testID` en todos los componentes críticos de la interfaz de usuario para hacer
las pruebas más fáciles de entender.
