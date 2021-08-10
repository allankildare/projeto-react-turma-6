import React, { Component } from 'react'
// importando a folha css module
import style from './Form.module.css'
// importando a imagem como variavel
import contactPic from './../../assets/images/contact-pic.jpg'
export default class Form extends Component {
  render() {
    return (
      // importamos a classe do css do componente e para utilizar a classe do app.css usamos a notação de string e damos espaço para ter espaço entre eleas
      <main className={`${style.gridInterno} content`}>
        <h1 className={style.titulo}>Olá Mundo!</h1>
        {/* passando o src da imagem como variavel */}
        <img src={contactPic} className={style.col2img} alt="Typewriter"></img>
        <form className={style.form}>
          <label>Nome</label>
          {/*aqui passamos o objeto de estilo foi definido na parte de cima chamando o atributo style e abrindo {} para passar essa variável*/}
          <input className={style.meuInput}
           />
          <label>Email</label>
          <input className={style.meuInput} />
          <label>Telefone</label>
          <input className={style.meuInput} />
          <button className={style.meuBotao}>Enviar</button>
        </form>
      </main>
    );
  }
}