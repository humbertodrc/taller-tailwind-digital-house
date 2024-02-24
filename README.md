# Taller de Tailwind CSS

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-blue.svg)](https://tailwindcss.com/)
[![PostCSS](https://img.shields.io/badge/PostCSS-8.4-blue.svg)](https://postcss.org/)
[![Autoprefixer](https://img.shields.io/badge/Autoprefixer-10.4-blue.svg)](https://postcss.org/)
[![npm](https://img.shields.io/badge/npm-7.24-blue.svg)](https://www.npmjs.com/)
[![CSS](https://img.shields.io/badge/CSS-3-blue.svg)](https://www.w3.org/Style/CSS/)
[![HTML](https://img.shields.io/badge/HTML-5-blue.svg)](https://html.spec.whatwg.org/multipage/)

## Tabla de Contenidos

- [Introducción a Tailwind CSS](#introducción-a-tailwind-css)
  - [¿Qué es Tailwind CSS?](#qué-es-tailwind-css)
  - [Ventajas y desventajas](#ventajas-y-desventajas)
    - [Ventajas](#ventajas)
    - [Desventajas](#desventajas)
- [Instalación y configuración inicial](#instalación-y-configuración-inicial)
  - [Pasos básicos para instalar Tailwind CSS en un proyecto de React](#pasos-básicos-para-instalar-tailwind-css-en-un-proyecto-de-react)
- [Uso de clases predefinidas](#uso-de-clases-predefinidas)
- [Utilidades y componentes](#utilidades-y-componentes)
- [Personalización](#personalización)
- [Pseudo-clases](#pseudo-clases)
- [Responsive Design](#responsive-design)

## Introducción a Tailwind CSS

### ¿Qué es Tailwind CSS?

Tailwind CSS es un framework de CSS que nos permite crear interfaces de usuario de manera rápida y sencilla. A diferencia de otros frameworks como Bootstrap o Foundation, Tailwind CSS no viene con componentes predefinidos, sino que nos proporciona una serie de clases que podemos utilizar para crear nuestros propios componentes.

### Ventajas y desventajas

#### Ventajas

- **Personalización**: Tailwind CSS nos permite personalizar cada aspecto de nuestra interfaz de usuario.
- **Rapidez**: Al no tener que escribir CSS desde cero, podemos crear interfaces de usuario de manera más rápida.
- **Tamaño**: Tailwind CSS es muy ligero, ya que solo incluye las clases que utilizamos en nuestro proyecto.

#### Desventajas

- **Curva de aprendizaje**: Tailwind CSS tiene una curva de aprendizaje más pronunciada que otros frameworks de CSS.

### Instalación y configuración inicial

#### Pasos básicos para instalar Tailwind CSS en un proyecto de React

1.Instalar Tailwind CSS y sus dependencias:

```bash
npm install -D tailwindcss postcss autoprefixer
```

2.Crear un archivo de configuración para Tailwind CSS:

```bash
npx tailwindcss init -p
```

3.Añade las rutas a todos tus archivos de plantilla en tu archivo tailwind.config.js.

```javascript
/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {},
 },
 plugins: [],
};
```

4.Agregar las directivas de Tailwind CSS a tu archivo CSS principal:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5.Puedes correr la aplicación con el siguiente comando:

```bash
npm run dev
```

## Uso de clases predefinidas

Para utilizar Tailwind CSS, simplemente tenemos que añadir las clases predefinidas a nuestros elementos HTML. Por ejemplo, si queremos añadir un margen a un elemento, podemos añadir la clase `m-4`:

```html
<div class="m-4">Este es un elemento con un margen de 1.5rem</div>
```

```html
<p class="text-red-500">Este es un párrafo con texto rojo</p>
```

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Botón
</button>
```

```html
<div class="flex items-center justify-center h-screen bg-gray-100">
  <div class="bg-white p-6 rounded-lg shadow-xl">
    <h1 class="text-2xl font-bold mb-4">Iniciar sesión</h1>
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Correo electrónico
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Correo electrónico"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Contraseña
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
        <p class="text-red-500 text-xs italic">Por favor, introduce una contraseña</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Iniciar sesión
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </form>
  </div>
</div>
```

## Utilidades y componentes

Tailwind CSS nos proporciona una serie de clases predefinidas que podemos utilizar para crear nuestros propios componentes. Algunos ejemplos de utilidades que podemos utilizar son:

- **Flexbox**: Tailwind CSS nos proporciona una serie de clases que podemos utilizar para trabajar con Flexbox, como `flex`, `flex-row`, `flex-col`, `justify-center`, `items-center`, etc.

- **Grid**: Tailwind CSS nos proporciona una serie de clases que podemos utilizar para trabajar con Grid, como `grid`, `grid-cols-2`, `gap-4`, etc.

- **Espaciado**: Tailwind CSS nos proporciona una serie de clases que podemos utilizar para trabajar con el espaciado, como `m-4`, `p-4`, `mt-4`, `mr-4`, `mb-4`, `ml-4`, `pt-4`, `pr-4`, `pb-4`, `pl-4`, etc.

- **Tipografía**: Tailwind CSS nos proporciona una serie de clases que podemos utilizar para trabajar con la tipografía, como `text-2xl`, `font-bold`, `text-red-500`, `italic`, etc.

Otra opcion que nos ofrece tailwind es crear y utilizar utilidades personalizadas, por ejemplo:

```css
/* Archivo principal de css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```css
@layer components {
  .btn {
    @apply py-2 px-4 bg-blue-500 text-white font-bold rounded;
  }
}
```

```html
<button class="btn">Botón</button>
```

Tamibén podemos crear aplicar estilos a etiquetas HTML, por ejemplo:

```css
@layer components {
  h1 {
    @apply text-2xl font-bold mb-4;
  }
}
```

```html
<h1>Este es un título</h1>
```

## Personalización

Tailwind CSS nos permite personalizar cada aspecto de nuestra interfaz de usuario. Podemos personalizar los colores, las tipografías, los espaciados, los tamaños, etc. Para personalizar Tailwind CSS, podemos utilizar el archivo `tailwind.config.js` que se genera al instalar Tailwind CSS.

```javascript
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ff6347',
        secondary: '#ff7f50',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

```html
<div class="bg-primary">Este es un div con el color de fondo primario</div>
```

```html
<p class="text-secondary">Este es un párrafo con el color de texto secundario</p>
```

```html
<button class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">
  Botón
</button>
```

## Pseudo-clases

Tailwind CSS nos permite utilizar pseudo-clases como `hover`, `focus`, `active`, `disabled`, etc. Por ejemplo, si queremos cambiar el color de fondo de un botón cuando el usuario pase el ratón por encima, podemos utilizar la clase `hover:bg-blue-700`:

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Botón
</button>
```

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
  Botón
</button>
```

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active:bg-blue-800">
  Botón
</button> 
```

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50">
  Botón
</button>
```

## Responsive Design

Tailwind CSS nos permite crear diseños responsivos utilizando clases predefinidas. Por ejemplo, si queremos que un elemento tenga un margen de 4 en dispositivos grandes y un margen de 2 en dispositivos pequeños, podemos utilizar las clases `m-4` y `sm:m-2`:

```html
<div class="m-4 sm:m-2">Este es un elemento con un margen de 1.5rem en dispositivos grandes y un margen de 0.5rem en dispositivos pequeños</div>
```

```html
<div class="flex flex-col sm:flex-row">Este es un elemento con un margen de 1.5rem en dispositivos grandes y un margen de 0.5rem en dispositivos pequeños</div>
```

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">Este es un elemento con un margen de 1.5rem en dispositivos grandes y un margen de 0.5rem en dispositivos pequeños</div>
```

```html
<div class="hidden sm:block">Este es un elemento con un margen de 1.5rem en dispositivos grandes y un margen de 0.5rem en dispositivos pequeños</div>
```

```html
<div class="block sm:hidden">Este es un elemento con un margen de 1.5rem en dispositivos grandes y un margen de 0.5rem en dispositivos pequeños</div>
```

```html
<div class="text-center sm:text-left">Este es un elemento con un margen de 1.5rem en dispositivos grandes y un margen de 0.5rem en dispositivos pequeños</div>
```

```html
<div class="text-center sm:text-left md:text-center lg:text-right">Este es un elemento con un margen de 1.5rem en dispositivos grandes y un margen de 0.5rem en dispositivos pequeños</div>
```

```html
<div class="text-center sm:text-left md:text-center lg:text-right xl:text-left">Este es un elemento con un margen de 1.5rem en dispositivos grandes y un margen de 0.5rem en dispositivos pequeños</div>
``` 

## Conclusiones

Tailwind CSS es un framework de CSS que nos permite crear interfaces de usuario de manera rápida y sencilla. A diferencia de otros frameworks como Bootstrap o Foundation, Tailwind CSS no viene con componentes predefinidos, sino que nos proporciona una serie de clases que podemos utilizar para crear nuestros propios componentes. Tailwind CSS nos proporciona una serie de clases predefinidas que podemos utilizar para trabajar con Flexbox, Grid, espaciado, tipografía, etc. Además, nos permite personalizar cada aspecto de nuestra interfaz de usuario. También nos permite utilizar pseudo-clases y crear diseños responsivos utilizando clases predefinidas. Tailwind CSS tiene una curva de aprendizaje más pronunciada que otros frameworks de CSS, pero una vez que nos acostumbramos a su sintaxis, podemos crear interfaces de usuario de manera más rápida y sencilla.

Algunos recursos para aprender más sobre Tailwind CSS son:

- [Documentación oficial de Tailwind CSS](https://tailwindcss.com/docs)
