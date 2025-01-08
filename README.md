# Pokédex

¡Bienvenido a la Pokédex! Esta aplicación te permite explorar y gestionar personajes de Pokémon utilizando la PokeAPI. Puedes buscar, agregar a favoritos y eliminar personajes de tu lista.

## Descripción

La Pokédex es una aplicación desarrollada con React que se conecta a la PokeAPI para mostrar información sobre diferentes Pokémon. Ofrece una interfaz responsiva y dinámica que permite a los usuarios buscar Pokémon, ver detalles, agregar personajes a favoritos y gestionar su lista de favoritos de manera eficiente.

## Características

- **Desarrollo responsivo**: La aplicación se adapta a diferentes tamaños de pantalla.
- **Barra dinámica de búsqueda**: Busca Pokémon por nombre o tipo.
- **Aplicar filtros de búsqueda**: Filtra los resultados según diferentes criterios.
- **Detalle de personaje**: Visualiza información detallada de cada Pokémon.
- **Agregar a favoritos**: Permite a los usuarios agregar Pokémon a su lista de favoritos.
- **Consulta de personajes favoritos offline**: Los personajes favoritos se almacenan localmente en el navegador.

## Tecnologías y Herramientas Utilizadas

### 🌐 **Frontend**
- **React**: Una biblioteca de JavaScript para construir interfaces de usuario interactivas. Utilizada para crear la estructura y la lógica dinámica de la aplicación.
- **React Router DOM**: Librería para manejar la navegación dentro de la aplicación de manera eficiente.
- **Tailwind CSS**: Un framework CSS de utilidad que facilita la creación de interfaces de usuario altamente personalizables y rápidas de desarrollar.
- **Axios**: Librería para hacer solicitudes HTTP. Utilizada para interactuar con la API del backend de manera eficiente.

### 🧰 **Herramientas y Utilidades**
- **Vite**: Un bundler de próxima generación que ofrece un tiempo de inicio rápido y un entorno de desarrollo optimizado para React.
- **ESLint**: Herramienta para asegurarse de que el código sea consistente y libre de errores comunes.
  - **eslint-plugin-react-refresh**: Plugin de ESLint para mejorar la experiencia de desarrollo con **React**.
- **PostCSS**: Herramienta de transformación de CSS que se utiliza junto con **Tailwind CSS** para asegurar la compatibilidad del código CSS con diferentes navegadores.
- **Autoprefixer**: Herramienta que añade automáticamente los prefijos de los navegadores al CSS para garantizar su compatibilidad en diferentes plataformas.

### 🔧 **Entorno de Desarrollo**
- **Visual Studio Code**: Editor de código fuente que proporciona una gran cantidad de extensiones y características útiles para desarrolladores.
- **Vite**: Utilizado para la construcción y la visualización en tiempo real de la aplicación.

## Instalación

Para ejecutar esta aplicación en tu máquina local, sigue estos pasos:

1. **Clona el repositorio:**:
   ```bash
   git clone https://github.com/tuusuario/pokedex-app.git

2. **Navega al directorio del proyecto:**:
    ```bash
    cd pokedex-app

3. **Instala las dependencias:**
    ```bash
    pnpm install

4. **Inicia la aplicacion:**
    ```bash
    pnpm start

**La aplicación debería abrirse en tu navegador en ## Instalación

Para ejecutar esta aplicación en tu máquina local, sigue estos pasos:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tuusuario/pokedex.git

2. **Navega al directorio del proyecto**:
    ```bash
    cd pokedex

3. **Instala las dependencias:**
    ```bash
    npm install

4. **npm install**
    ```bash
    npm start

**La aplicación debería abrirse en tu navegador en http://localhost:3000.**

## Uso

1. **Buscar Pokémon:** Usa la barra de búsqueda para encontrar Pokémon por nombre o tipo.
2. **Agregar a favoritos:** Haz clic en el botón "Agregar a favoritos" en la tarjeta del Pokémon.
3. **Ver favoritos:** Accede a la lista de Pokémon favoritos desde el menú.
4. **Eliminar de favoritos:** Haz clic en el botón "Eliminar de favoritos" para quitar un Pokémon de tu lista.

## API Utilizada

La aplicación utiliza la [PokeAPI](https://pokeapi.co/) para obtener información sobre los personajes de Pokémon. La API proporciona datos como nombres, tipos, habilidades y estadísticas de cada Pokémon.