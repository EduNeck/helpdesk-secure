# Helpdesk Secure Coding & DevSecOps

## Objetivo

Desarrollar una aplicación Helpdesk segura utilizando
Node.js, TypeScript, PostgreSQL y Docker.

## Reglas generales

- Priorizar la seguridad y la mantenibilidad.
- Respetar la arquitectura existente.
- Explicar las modificaciones propuestas.
- No modificar archivos sin autorización.
- No ejecutar comandos destructivos.

## Base de datos

- Aplicar el principio de mínimo privilegio.
- No ejecutar migraciones sin autorización.
- No modificar ni eliminar datos sin autorización.
- No utilizar credenciales administrativas para la API.
- Utilizar consultas parametrizadas.

## Seguridad de API

- Validar todas las entradas.
- Implementar controles de autenticación y autorización.
- Evitar exponer información sensible.
- Aplicar manejo seguro de errores.
- Considerar las recomendaciones OWASP.

## Docker

- No eliminar contenedores ni volúmenes sin autorización.
- No ejecutar docker compose down -v.
- No modificar servicios sin explicar el impacto.

## Flujo de trabajo

1. Analizar el código existente.
2. Identificar riesgos y dependencias.
3. Proponer una solución.
4. Solicitar autorización antes de modificar.
5. Implementar cambios aprobados.
6. Ejecutar pruebas autorizadas.
7. Documentar resultados.
