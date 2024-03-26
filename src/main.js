const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const timeStampDoEvento = new Date('2024-04-22').getTime(); 
    const distanciaAteOEvento =  timeStampDoEvento - timeStampAtual;

    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
        return;
    }

    const { dias, horas, minutos, segundos } = calcularTempo(distanciaAteOEvento);

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}, 1000);

function calcularTempo(milissegundos) {
    const segundos = Math.floor(milissegundos / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    return {
        dias: dias,
        horas: horas % 24,
        minutos: minutos % 60,
        segundos: segundos % 60
    };
}