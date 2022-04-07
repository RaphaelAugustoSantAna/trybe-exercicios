let processoSeletivo = "aprovada";

switch (processoSeletivo) {
    case "aprovada":
        console.log("parabéns você passou!");
        break;

    case "lista":
        console.log("você está na lista de espera");
        break;

    case "reprovada":
        console.log("infelizmente você não passou.");
        break;

    default:
        console.log("não se aplica");
        break;      
}