import React, { useState, useEffect } from "react";
import Filme from './../filme/Filme'
import './Main.css'
import axios from 'axios'

type FilmeType = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}

const API_URL = "http://localhost:3000/filmes";

export default function Main() {
  const [texto, setTexto] = useState("");
  const [filmes, setFilmes] = useState<FilmeType[]>([]);

  useEffect(() => {
    const buscaFilme = async () => {
      try {
        const resposta = await axios.get<FilmeType[]>(API_URL);
        console.log('Resposta da requisição:', resposta);
        setFilmes(resposta.data);
      } catch (error) {
        console.log('Erro ao buscar os dados:', error);
      }
    };

    buscaFilme();
  }, []);
  

/*export default function Main() {
    //let textodigitado = 'Barbie'
    //Hooks são funções do React que ajudam a gente a fazer tarefas
    //específicas
    const [texto,setTexto]=useState("")

    const filmes:FilmeType[] = [
        {
            id:1,
            titulo:'Barbie',
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png'
        },
        {
            id:2,
            titulo:'Filme Barbie',
            sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
            imagem:'/KEN.png'
        },
        {
            id:3,
            titulo:'Filme Barbie',
            sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
            imagem:'/boneca.jpg'
        },
        {
            id:5,
            titulo:'Barbie',
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png'
        },
    ]*/

    //O parâmetro "e" da minha função será o meu evento que ocorreu
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        //console.log(e.target.value)
        //Como eu faço para mudar o texto para "TERE"
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <p>Busque um filme</p>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise um Filme'
                       onChange={TrataTexto} />
                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            <main className="content-main">
                
                {
                    filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map(
                        (filme)=>
                            <Filme 
                                key={filme.id}
                                descricao={filme.descricao}
                                titulo={filme.titulo}
                                foto={filme.foto}
                            />
                    )
                }

            </main>
        </>
    )
}
