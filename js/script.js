// Chiedi all’utente il suo nome,
const Name = prompt("Come ti chiami?")
// poi chiedi il suo cognome,
const surname = prompt("Qual è il tuo cognome?")
// poi chiedi il suo colore preferito
const color = prompt("Qual è il tuo colore preferito?")
// Infine scrivi sulla pagina nomecognomecolorepreferito21
document.getElementById("title").innerHTML = `La tua password sarà: ${Name}${surname}${color}21`

document.getElementById("title2").innerHTML = `Mi raccomando non mostrarla a nessuno`