const pecaDeXadrex = 'bispo';
switch (pecaDeXadrex.toLowerCase()) {
    case 'rei':
        console.log('Rei -> uma casa apenas mais para qualquer direção.');
        break;
    case 'bispo':
        console.log('bispo -> Diagonal');
        break;
    case 'rainha':
        console.log('rainha -> Diagonal,horizontal e vertical');
        break;
    default:
        console.log('peça invalida');
        break;

}