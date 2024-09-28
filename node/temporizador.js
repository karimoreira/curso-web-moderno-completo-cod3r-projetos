const schedule = require('node-schedule')

function criarLembreteBeberAgua(intervaloEmMinutos) {
    const regraLembrete = `*/${intervaloEmMinutos} * * * *`
    const lembrete = schedule.scheduleJob(regraLembrete, () => {
        console.log(`💧 Hora de beber água! - ${new Date().toLocaleTimeString()}`)
    })
    console.log(`Lembrete de beber água agendado a cada ${intervaloEmMinutos} minutos.`)
    return lembrete
}

function cancelarLembrete(lembrete) {
    if (lembrete) {
        lembrete.cancel()
        console.log('Lembrete de beber água cancelado.')
    }
}

let lembreteAgua = criarLembreteBeberAgua(60)

setTimeout(() => {
    cancelarLembrete(lembreteAgua)
}, 8 * 60 * 60 * 1000)
