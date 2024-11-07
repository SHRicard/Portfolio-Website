# 📖 Web Book

Este proyecto es una **Web Book Portfolio** creada con **React, TypeScript, Vite, MUI, y Redux**. La idea principal es simular un libro digital con un diseño y una animación de pasar páginas, permitiendo a los usuarios navegar entre diferentes secciones de manera visual e interactiva.

## 🚀 Tecnologías utilizadas

- ⚡ **Vite**: Para un desarrollo rápido y optimizado.
- ⚛️ **React + TypeScript**: Estructura y tipado seguro.
- 🎨 **Material UI (MUI)**: Para un diseño atractivo y consistente.
- 🧩 **CoreUI y Bootstrap**: Para componentes estilizados y una base de diseño UI amplia y adaptable.
- 💅 **Styled-Components**: Para estilos encapsulados y dinámicos en componentes donde sea conveniente, permitiendo un control detallado de estilos específicos.
- 🗂️ **Redux Toolkit**: Gestión de estado global, especialmente útil para temas (modo oscuro/claro) y configuraciones globales.
- 🛠️ **Alias de importación**: Configurado para rutas más limpias y organizadas, utilizando `@` como alias de la carpeta `src`.
- 🧬 **Atomic Design**: Arquitectura de componentes basada en Atomic Design para organizar y reutilizar componentes.

## ✨ Funcionalidades Clave

- 📖 **Animación de libro**: Navegación entre secciones con un efecto de pasar página.
- 🌗 **Tema oscuro y claro**: Cambia el tema global de la aplicación.
- 🔄 **Componentes reutilizables**: Diseñados para ser fácilmente extendibles y mantener una interfaz coherente.

## 📐 Diseño Responsivo

Este proyecto está diseñado para adaptarse a diferentes tamaños de pantalla, proporcionando tres vistas específicas:

1. **Vista XL** 📚: Estilo de "libro" para pantallas grandes, ofreciendo la experiencia completa del portafolio.
2. **Vista MD** 🗂️: Estilo de "cart" para pantallas medianas, adaptando el contenido a un formato más compacto.
3. **Vista SM** 🃏: Estilo de "card" para pantallas pequeñas, optimizado para dispositivos móviles y ofreciendo una versión simplificada.

## 🏗️ Estructura de Atomic Design

El proyecto sigue la estructura de **Atomic Design** para la organización de los componentes. Esta arquitectura permite construir la interfaz de usuario de manera modular, en diferentes niveles de abstracción:

1. **Atoms** ⚛️: Componentes básicos e independientes, como botones e íconos.
2. **Molecules** 🧬: Combinaciones simples de átomos, como un campo de entrada con etiqueta.
3. **Organisms** 🏗️: Componentes más complejos, formados por múltiples átomos y moléculas, como un formulario completo.
4. **Templates** 📐: Estructuras que organizan organismos y definen el diseño sin contenido específico.
5. **Pages** 📄: Vistas completas que integran plantillas y organismos en un contexto específico.

### 📁 Ejemplo de Estructura

```plaintext
src/
└── components/
    ├── atoms/
    ├── molecules/
    ├── organisms/
    ├── templates/
    └── pages/
```
