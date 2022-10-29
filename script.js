
/*Crie uma lista de produtos
 A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado 
 Exiba essa lista no console quando abrir o index.html.
*/
let produtos = ["Computador", "Telefone", "Mouse", "Teclado"];

console.log(produtos);

// Mostre no console quantos produtos tem nessa lista.
console.log(produtos.length);

//Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
produtos.splice(produtos.indexOf("Mouse"), 1);
console.log(produtos);

/* 
 Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso 
 exista esse produto na sua lista exiba um console falando que este produto existe e mostre
 tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.
*/
function encontrarProduto(produto){
    if (produtos.includes(produto)){
        console.log(`Produto ${produto} encontrado.`)
    }else{
        console.log(`Produto ${produto} nao encontrado`);
    }
}

encontrarProduto("Computador");
encontrarProduto("TV");

// Remova o segundo item da sua lista.
produtos.splice(1,1);
console.log(produtos);