## GIT

### Workflow

El workflow utilizado en el proyecto es [GitFlow](https://blog.axosoft.com/gitflow).

## Commits

Para los commits se utiliza la especificación [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Esto permite generar un registro de cambios de manera automática con [Release It](https://github.com/release-it/release-it). Debido a esto, _no podrá enviar mensajes que no siga esta especificación_.

```text
feat(scope): added hat wobble
^--^ ^---^  ^---------------^
|     |     |
|     |     +-> Resumen en pasado simple.
|     +-------> Alcance (opcional)
+-------------> Tipo: chore, docs, feat, fix, refactor, style, or test.
```

### Tipos de commit

- `breaking`: (un gran feature/refactor que incluye un cambio rotundo)
- `feat`: (nueva feature que aporte valor al usuario).
- `fix`: (bug fix que aporte valor al usuario).
- `docs`: (cambios en la documentacioón)
- `style`: (formatos, punto y coma faltantes, etc; sin cambio de código de producción)
- `refactor`: (refactors en código de producción, eg. renombrar una función o variable)
- `test`: (se agregan o refactorizan tests, etc; no hay cambios en producción)
- `chore`: (actualizacion de tareas de build o configuración, etc; no hay cambios en producción)
