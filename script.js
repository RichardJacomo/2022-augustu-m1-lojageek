const itens = [
    {
    image: './assets/img/painting/clock.jpg',
    name: 'Relógio',
    price: 'R$29,90',
    type: 'quadro',
},
{
    image: './assets/img/painting/gamepad.jpg',
    name: 'GamePad',
    price: 'R$29,90',
    type: 'quadro',
},
{
    image: './assets/img/painting/personagem.jpg',
    name: 'C3PO',
    price: 'R$29,90',
    type: 'quadro',
},
{
    image: './assets/img/actions/animewoman.jpg',
    name: 'Animewom',
    price: 'R$39,90',
    type: 'figura',
},
{
    image: './assets/img/actions/dragonballpersonagem.jpg',
    name: 'Goku',
    price: 'R$39,90',
    type: 'figura',
},
{
    image: './assets/img/actions/starwarspersonagem.jpg',
    name: 'Baby Yoda',
    price: 'R$39,90',
    type: 'figura',
},
]

const listFrames = [];
const listFigures = [];

function separateItens(lista){  
    for(let i = 0; i < lista.length; i++){
        let produtoAtual = lista[i];
        if(produtoAtual.type == 'quadro'){
            listFrames.push(lista[i])
        }else{
            listFigures.push(lista[i]);
        }
    }
    return 'Type não declarado';
}

separateItens(itens);

// selecionando lista de quadros e ligando às suas respectivas funções
let sectionFrames = document.getElementsByClassName('secaoQuadros')[0];
let sectionFigures = document.getElementsByClassName('secaoFiguras')[0];

    for(let i = 0; i < listFrames.length; i++){
        //criando li, img, span e p com para frames
        let elementoFrame = document.createElement('li');
        let imageFrame = document.createElement('img');
        let nomeFrame = document.createElement('span');
        let priceFrame = document.createElement('p');
        imageFrame.src = listFrames[i].image;
        nomeFrame.innerText = `${listFrames[i].name}`;
        priceFrame.innerText = `${listFrames[i].price}`;
        elementoFrame.appendChild(imageFrame);
        elementoFrame.appendChild(nomeFrame);
        elementoFrame.appendChild(priceFrame);
        sectionFrames.appendChild(elementoFrame);
    }
        for(let i = 0; i < listFigures.length; i++){
        //criando li, img, span e p com para action figures
        let elementoFigure = document.createElement('li');
        let imageFigure = document.createElement('img');
        let nomeFigure = document.createElement('span');
        let priceFigure = document.createElement('p');
        imageFigure.src = listFigures[i].image;
        priceFigure.innerText = `${listFigures[i].price}`;
        nomeFigure.innerText = `${listFigures[i].name}`;
        elementoFigure.appendChild(imageFigure);
        elementoFigure.appendChild(nomeFigure);
        elementoFigure.appendChild(priceFigure);
        sectionFigures.appendChild(elementoFigure);
    }      





