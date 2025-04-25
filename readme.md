# 🛠️ Mini DevOps Workshop

Este proyecto es un taller práctico diseñado para demostrar un flujo completo de DevOps, desde el desarrollo hasta el despliegue en producción. Utiliza herramientas modernas como Docker, Docker Compose y GitHub Actions para automatizar procesos y facilitar la integración y entrega continuas (CI/CD).​

## 📦 Características

   -  Aplicación Node.js: Una API sencilla construida con Express.js.

   - Dockerización: Contenedores Docker para facilitar la portabilidad y consistencia en diferentes entornos.

   - Docker Compose: Gestión de múltiples servicios y perfiles (dev y prod) para entornos de desarrollo y producción.

   - GitHub Actions: Automatización de pruebas, construcción de imágenes y despliegue continuo.

   - Despliegue en Servidor Remoto: Uso de sshpass para la conexión y ejecución de comandos en un servidor remoto.​

## 🚀 Inicio Rápido
### 🖥️ Requisitos Previos

  - Docker y Docker Compose instalados.

  - Cuenta en GitHub con acceso a GitHub Actions.

  - Servidor remoto accesible vía SSH para despliegue.​

## 🔧 Configuración Local

Clona el repositorio:​

```bash
    git clone https://github.com/JosafatJimenezB/Mini-devops-workshop.git
    cd Mini-devops-workshop
```

Construye y levanta los contenedores en modo desarrollo:​

```bash
    docker compose --profile dev up --build
```

Accede a la aplicación en http://localhost:9000.​

## 🧪 Pruebas

Ejecuta las pruebas utilizando el siguiente comando:​

```bash
pnpm test
```

## 🛠️ Despliegue
### 🔐 Configuración de Secretos en GitHub

Configura los siguientes secretos en tu repositorio de GitHub para permitir el despliegue automático:​

- SSH_USER: Usuario SSH del servidor remoto.

- SSH_HOST: Dirección IP o dominio del servidor remoto.

- SSH_PASSWORD: Contraseña SSH del servidor remoto.

- AUTH_TOKEN: Token de autenticación para acceder al registro de contenedores (GHCR).​

## 🚀 Despliegue en Producción

El flujo de trabajo de GitHub Actions realiza los siguientes pasos:​

- Construye y publica la imagen Docker en GHCR.

- Se conecta al servidor remoto vía SSH.

- Detiene y elimina los contenedores existentes.

- Elimina imágenes antiguas para liberar espacio.

- Clona la última versión del repositorio.

- Levanta los nuevos contenedores en modo producción.​

📁 Estructura del Proyecto

```plaintext
Mini-devops-workshop/
├── .github/workflows/        # Flujos de trabajo de GitHub Actions
├── docker-compose.yml        # Configuración de Docker Compose
├── Dockerfile                # Definición de la imagen Docker
├── src/                      # Código fuente de la aplicación
│   └── index.js              # Punto de entrada de la aplicación
├── package.json              # Dependencias y scripts de npm
└── README.md                 # Documentación del proyecto
```
## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este taller o agregar nuevas funcionalidades, por favor abre una issue o envía un pull request.​

## Licencia

Este proyecto está bajo la licencia MIT.​

###### Made with :sparkling_heart: by Josafat Jimenez
