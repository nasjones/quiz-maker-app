import React from 'react'
const QuizContext = React.createContext({
    quiz: [],
    pageUpdate: () => { },
    loaded: null
})
export default QuizContext
