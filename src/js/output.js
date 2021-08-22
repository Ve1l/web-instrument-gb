const output = document.getElementById('output')

export function writeOutput(outputValue) {
  output.innerHTML = outputValue
}

export function dateDiff(diffObjet) {
  const { years, months, days } = diffObjet

  writeOutput(`
    Лет: ${years}
    Месяцев: ${months}
    Дней: ${days}
  `)
}
