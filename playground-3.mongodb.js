

//Crie um banco de dados chamado mypet no MONGODB :D
use("mypet")
//Crie uma collection chamada dono 
db.createCollection("dono")
// 3. Crie as colunas na `collection dono`: `_id` `nome` `idade` `animal` 
// 1. Na coluna `animal`, adicione as informações do: `_id` `nome` `valor` `raca`
// 2. Insira 4 itens na `collection` `dono` 
    
//     *(OBS: os ids devem ser em sequencia iniciando pelo 1)*
    
// 3. Para cada item adicionado na `collection dono`, adicione 3 itens em `animal`
db.dono.insertMany(
  {_id:1, nome:"Maria Eduarda", idade: 18, 
  animal:[{_id: 1, nome: "Maggy", valor:"1000", raca:"Pincher"},
  {_id: 2, nome: "Mago", valor:"1000", raca:"Bacê"},
  {_id: 3, nome: "Mongo", valor:"1000", raca:"Bulldog"}]
},
{_id:2, nome:"Henrique", idade: 18, 
animal:[{_id: 4, nome: "Lutor", valor:"1000", raca:"Vira Lata"},
{_id: 5, nome: "Lex", valor:"1000", raca:"Vira Lata"},
{_id: 6, nome: "Capado", valor:"1000", raca:"Vira Lata"}]
},
{_id:3, nome:"Maria Eduarda", idade: 18, 
animal:[{_id: 7, nome: "Laranja", valor:"1000", raca:"Papagaio"},
{_id: 8, nome: "Polaco", valor:"1000", raca:"Siamês"},
{_id: 9, nome: "Lotus", valor:"1000", raca:"Periquito"}]
},
{_id:4, nome:"Maria Eduarda", idade: 18, 
animal:[{_id: 10, nome: "Molho", valor:"1000", raca:"Pincher"},
{_id: 11, nome: "Lucifer", valor:"1000", raca:"Persa"},
{_id: 12, nome: "Alexander", valor:"1000", raca:"Kakatua"}]
}
)
//Faça uma consulta que liste o nome e animal do dono com _id 2
db.dono.find({_id:2},{nome:true, animal:true})
//Faça uma consulta que apague o dono com id 2
db.dono.deleteMany({_id:2})
//Faça uma consulta que liste todos os dono
db.dono.find({})
//Faça uma consulta que apague todos os dados da collection dono 
db.dono.deleteMany({})
//Faça uma consulta que exclua a collection dono
db.dono.drop()
//Faça uma consulta que exclua o banco de dados mypet  
db.dropDatabase()
