import './Filme.css'
type FilmeProps = {
    titulo:string,
    descricao:string,
    foto:string
}
function Filme(props:FilmeProps){
    return(
        <div className="filme-content">
            {/* O comentário dentro do JSX é desse formato */}
            {/* Dentro das chaves você pode utilizar java script */}
            {/* Por isso podemos importar o "Imagem" dentro do componente IMG */}
            {/* Não vou competir com vocês conversando! */}
            {/* Se não apareceu a imagem é provavel que você não tenha a imagem na pasta assets */}
            {/* Pode ser no componente, mas o caminho deve estar correto. */}
            {/* Imagem está no meu git (Não) */}
            <img className="img-filme" src={props.foto} alt="" />
            <div className="text-barbie">
                <h1>{props.titulo}</h1>
                <p className="sinopse">{props.descricao}</p>
            </div>
        </div>
    )
}
export default Filme
