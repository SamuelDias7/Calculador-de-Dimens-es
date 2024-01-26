let altura = 0;
let largura = 0;

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Carcular área e perímetro';

setarSubtitulo('Informe a ','altura: ');

function pegarDados(){

    if(altura == 0){
        setarSubtitulo('Informe a ','altura: ');
        altura = document.querySelector('input').value;
        //console.log('altura:' + altura);
        limparCampo();
        alterarNomeDoBotao('altura','enviar largura');
        setarSubtitulo('Informe a ','largura:');


    }else{
        largura = document.querySelector('input').value;
        //console.log('largura' + largura);
        limparCampo(altura, largura);
        desativarElementos('altura', 'disabled', true);
        ativarBotao('largura', 'disabled', false);
        desativarElementos('s', 'disabled', true);
        setarSubtitulo(`altura: ${altura}`, `largura: ${largura}`);

    }

    if(largura != 0){
    calcular(altura, largura);

    }else{
    
    }

}

function calcular(alturaP, larguraP){
    console.log(`altura: ${alturaP} largura: ${larguraP}`);

    let area = alturaP * larguraP;

    let perimetro = (alturaP * 2) + (larguraP * 2)

    exibirDados(area, perimetro);

}

function exibirDados(areaP, perimetroP){
    console.log(`A área é igual a: ${areaP}`);
    console.log(`O perímetro é igual a: ${perimetroP}`);

    let campo = document.querySelector('input');
    campo.value = `área: ${areaP} / perímetro: ${perimetroP}`;
}

function reiniciar(){
    altura = 0;
    largura = 0;
    //pegarDados();
    limparCampo();
    ativarBotao('altura', 'disabled', false);
    ativarBotao('s', 'disabled', false);
    setarSubtitulo('Informe a ','altura');
    alterarNomeDoBotao('altura', 'enviar altura');
    desativarElementos('largura', 'disabled', true);

}

function desativarElementos(botao, atributo, estado){
    let btn = document.getElementById(botao).setAttribute(atributo, estado);

}

function ativarBotao(botao, atributo, estado){
    let btn = document.getElementById(botao).removeAttribute(atributo, estado);

}

function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
}

function alterarNomeDoBotao(botao,botaoNome){
    let btn = document.getElementById(botao);
    btn.innerHTML = botaoNome;
}

function setarSubtitulo(texto,dimensao){
    let subtitulo = document.querySelector('p');
    subtitulo.innerHTML = `${texto} ${dimensao}`;


}


