const port = process.env.PORT || 3000
const app = require('express')()
const _ = require('lodash')

const header = '<h2>Every day learn new polish sentence</br> the sentence for today is: </h2>'

const lessons = [
    ['Pocałuj mnie w dupe', 'Kiss my ass'],
    ['Zajebiscie!', 'Fucking awesome!'],
    ['Pojebany pomysł', 'Stupid idea']
]

const lessonOfADay = _(lessons).shuffle().first()


app.get('/', (req, res) =>
    res.send(`
            ${header}
            <h1>
                ${lessonOfADay[0]} => ${lessonOfADay[1]}
            </h1>`
    )
)

app.set('port', port)

app.listen(() =>
    console.log(`http://localhost:${port}`)
)