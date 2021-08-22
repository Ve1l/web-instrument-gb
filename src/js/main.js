import { writeOutput, dateDiff as printDateDiff } from './output'
import calcDiff from './calcDate'
import '../scss/main.scss'

const form = document.getElementById('calcDate')

form.onsubmit = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  const dateFrom = formData.get('dateFrom')
  const dateTo = formData.get('dateTo')

  if (!dateFrom || !dateTo) {
    writeOutput('Error')

    return
  }
  writeOutput(calcDiff(dateFrom, dateTo))
}
