import React from 'react'
import Profile from '../images/profile.jpg'
import './layout/index.css'


export default () => 
  <div className = 'main-container'>
    <img src={Profile} width="200" height="200"></img>
    <p>Olá, prazer! Sou o Petterson, um jovem de 28 anos que ama tecnologia e viajar. Sou formado em Ciência da Computação e atualmente trabalho coordenando uma equipe de desenvolvimento.</p>
    <p>Potterhead de carteirinha, adoro assistir filmes de ficção, aventura, comédia e policial, além de Harry Potter e derivados.</p>
    <p>Uma outra paixão é viajar por esse mundão e detalhe, na maioria das vezes (para não dizer sempre) viajo sozinho por aí.</p>
    <p>Neste blog vou contar um pouco mais sobre o meu trabalho e algumas viagens que já realizei.</p>
  </div>
