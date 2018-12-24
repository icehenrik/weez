const requester = require("node-superfetch");

class WeezError extends TypeError {
    /**
    * @param {string} error Error de la función
    * @private
    */
    constructor(error) {
      super();
      this.name = 'WeezAPI-ERROR'

    /**
    * Error enviado por el endpoint
    * @type {string} 
    */
    this.message = error; 
    }
  }
  
class WeezAPI {
    /**
    * @param {string} token La clave que se te dio al registrate
    * @private
    */
    constructor(token) {
        this.token = token;
    }

    async trump(text) {
        let res = await requester.get(`http://weez.pw/api/trump?texto=${text}`).set("clave", this.token)
        if (res.body.mensaje) throw new WeezError(res.body.mensaje)
        return res.body
    }
    async basura(url) {
        let res = await requester.get(`http://weez.pw/api/basura?avatar=${url}`).set("clave", this.token)
        if (res.body.mensaje) throw new WeezError(res.body.mensaje)
        return res.body
    }
    async drake(yes, no) {
        let res = await requester.get(`http://weez.pw/api/drake?si=${yes}&no=${no}`).set("clave", this.token)
        if (res.body.mensaje) throw new WeezError(res.body.mensaje)
        return res.body
    }
    async rainbow(url) {
        let res = await requester.get(`http://weez.pw/api/rainbow?avatar=${url}`).set("clave", this.token)
        if (res.body.mensaje) throw new WeezError(res.body.mensaje)
        return res.body
    }
    async coche(yes, no) {
        let res = await requester.get(`http://weez.pw/api/coche?si=${yes}&no=${no}`).set("clave", this.token)
        if (res.body.mensaje) throw new WeezError(res.body.mensaje)
        return res.body
    }
    async gru(txt1, txt2, txt3) {
        let res = await requester.get(`http://weez.pw/api/gru?op1=${txt1}&op2=${txt2}&op3=${txt3}`).set("clave", this.token)
        if (res.body.mensaje) throw new WeezError(res.body.mensaje)
        return res.body
    }
    async estoes(avatar, texto) {
        let res = await requester.get(`http://weez.pw/api/esto_es?avatar=${avatar}&texto=${texto}`).set("clave", this.token)
        if (res.body.mensaje) throw new WeezError(res.body.mensaje)
        return res.body
    }
    async logro(texto) {
        let res = await requester.get(`http://weez.pw/api/logro?texto=${texto}`).set("clave", this.token)
        if (res.body.mensaje) throw new WeezError(res.body.mensaje)
        return res.body
    }
    ///////////////////////////
    //
    // RANDOM
    //
    //////////////////////////

    async randomLoli() {
        let res = await requester.get(`http://weez.pw/api/random/loli`).set("clave", this.token)
        if (res.body.success == false) throw new WeezError(res.body.mensaje)
         return res.body.link
    }
    async randomTrap() {
        let res = await requester.get(`http://weez.pw/api/random/trap`).set("clave", this.token)
        if (res.body.success == false) throw new WeezError(res.body.mensaje)
         return res.body.link
    }
    async randomBoys() {
        let res = await requester.get(`http://weez.pw/api/random/boys`).set("clave", this.token)
        if (res.body.success == false) throw new WeezError(res.body.mensaje)
         return res.body.link
    }
    async randomPat() {
        let res = await requester.get(`http://weez.pw/api/random/pat`).set("clave", this.token)
        if (res.body.success == false) throw new WeezError(res.body.mensaje)
         return res.body.link
    }
    async randomBeso() {
        let res = await requester.get(`http://weez.pw/api/random/beso`).set("clave", this.token)
        if (res.body.success == false) throw new WeezError(res.body.mensaje)
         return res.body.link
    }
    async randomAbrazo() {
        let res = await requester.get(`http://weez.pw/api/random/abrazo`).set("clave", this.token)
        if (res.body.success == false) throw new WeezError(res.body.mensaje)
         return res.body.link
    }
    async randomEdgy() {
        let res = await requester.get(`http://weez.pw/api/random/edgy`).set("clave", this.token)
        if (res.body.success == false) throw new WeezError(res.body.mensaje)
         return res.body.link
    }
    async randomMeme() {
        let res = await requester.get(`http://weez.pw/api/random/meme`).set("clave", this.token)
        if (res.body.success == false) throw new WeezError(res.body.mensaje)
         return res.body.link
    }

    
    
}


/**
 * La bienvenida que se quiere crear
 * @param {Object} [datos] Los datos que se van a pasar
 */
class Bienvenida { 
 constructor(datos = {}) { 
}
     /**
    * @param {URL} fondo <OPCIONAL> Un url al fondo de la bienvenida, si se deja vacio, el fondo sera transparente.
    * @private
    */

fondo(fondo) {
 this.fondo = fondo;
return this;
}

 /**
* @param {URL} avatar <OBLIGATORIO> Un url al avatar de la persona.
* @private
*/

avatar(avatar) {
this.Avatar = avatar;
return this;
}

/** 
* @param {string} h1 <OBLIGATORIO> El texto grande que aparecera abajo del avatar.
* @private
*/

textoTitulo(h1) {
this.H1 = h1;
return this;
}

/** 
* @param {string} h2 <OPCIONAL> El texto pequeño que aparecera abajo del Titulo.
* @private
*/ 

 textoDesc(h2) {
this.H2 = h2;
return this;
}

/** 
* @param {string} color <OPCIONAL> El color hexadecimal de todos los textos, si no se pone o el color es invalido, quedara en blanco.
* @private
*/

textoColor(color) {
this.Color = color;
return this;
          }
/** 
* @param {string} color <REQUERIDO> El color hexadecimal de todos los textos, si no se pone o el color es invalido, quedara en blanco.
* @private
*/
acceso(weez) {
this.weez = weez;
return this;
          }
        }

    
async function bienvenidaRender(bienvenida){
        if(!bienvenida) throw new WeezError("Tienes que poner un constructor de bienvenida!")
        if(!bienvenida.Avatar) throw new WeezError("Es obligatoria poner un avatar en la Bienvenida")
        if(!bienvenida.H1) throw new WeezError("Es obligatoria el Titulo")
        if(!bienvenida.weez) throw new WeezError("Tienes que mandar el constructor de acceso")
        fondo = bienvenida.fondo;
        avatar = bienvenida.Avatar;
        textoTitulo = bienvenida.H1;
        textoDesc = bienvenida.H2 || " ";
        textoColor = bienvenida.Color;
        token = bienvenida.weez.token;
       
        let res = await requester.get(`http://weez.pw/api/bienvenida?fondo=${fondo}&avatar=${avatar}&h1=${textoTitulo}&h2=${textoDesc}&color=${textoColor}`).set("clave", token)
        if (res.body.success == false) throw new WeezError(res.body.mensaje)
         return res.body
    
      }


module.exports = { 
    Bienvenida: Bienvenida,
    WeezAPI: WeezAPI,
    bienvenidaRender: bienvenidaRender 
}

