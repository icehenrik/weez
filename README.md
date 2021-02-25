![](https://i.imgur.com/PRfsYKP.png)

Wrapper oficial de [Wezz API](https://www.weez.pw "Wezz API")

Weez es API con una base de datos de imagenes y funciones de edición de plantillas, está pensado para el uso en Bots de Discord, pero cualquier aplicación puede hacer uso de las funciones por medio de pedidos HTTP

# Instalación
Para poder usar el Wrapper necesitamos una clave, si no la tienes, registrate [aquí](https://www.weez.pw "aquí")

Para instalar hacemos

```bash
npm install weez
```

# USO

```js
var Weez = require("weez");
var weez = new Weez.WeezAPI("TU-CLAVE");
```
## Listado de todos las funciones
Todos devuelven una **Promesa**
```js
// edicion de imagenes
weez.trump("Texto de la nueva ley")
weez.basura("Imagen URL")
weez.drake("URL sí", "URL no")
weez.coche("URL sí", "URL no")
weez.rainbow("Imagen URL")
weez.gru("texto1, texto2, texto3")
weez.estoes("avatar, texto")
weez.logro("texto")
weez.cerebro("texto1, texto2, texto3, texto4")
weez.susto("avatar")
weez.wasted("avatar")
weez.bob("avatar")
weez.eyes("texto1, texto2, texto3")
weez.triggered("avatar") // <-- Animado
weez.psicopata("avatar")
weez.elegante("texto1","texto2")
weez.bart("avatar")
weez.olvido("avatar")
weez.arte("avatar")

// Misc
weez.letra("canción")

// imagenes random
weez.randomBoys()
weez.randomPat()
weez.randomBeso()
weez.randomAbrazo()
weez.randomEdgy()
weez.randomMeme()

//Bienvenida (constructor)
weez.Bienvenida()

```

## Ejemplo de Uso

(Ejemplos eliminados)
