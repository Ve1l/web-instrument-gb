import { writeOutput, dateDiff } from './output'
import calcDateDiff from './calcDate'

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
  dateDiff(calcDateDiff(dateFrom, dateTo))
}
