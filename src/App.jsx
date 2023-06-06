import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import useReplace from './hook/getReplace'
import Spinner from './components/Spinner'
import Answers from './components/Answers'

const API_URL ='https://opentdb.com/api.php?amount=10&Don%27t%20forget%20that%20%CF%80%20%3D%203.14%20%26%20doesn%27t%20equal%203.'


function App() {
	const [questions, setQuestions] = useState()
	const [loading, setLoading] = useState(true)
	const [nextQuestion, setNextQuestion] = useState(0)
	const [correctAnswer, setCorrectAnswer] = useState(false)
	const [points, setPoints] = useState(0)

	const getQuestions = () => {
		setLoading(true)
		fetch(API_URL)
			.then(response => response.json())
			.then(data => {
				setQuestions(data.results)
				setLoading(false)
			})
			.catch(error => {
				console.log(error.message)
				setLoading(false)
			})
	}

useEffect(()=>{
	getQuestions()
},[])

const handleNextQuestion = () => {
	setNextQuestion(nextQuestion + 1)
}	


	if (loading) return <Spinner/>


	return(
		<>
			<section>
				<div className='flex flex-row justify-center'>
					<h1 className='text-8xl font-bold mb-10'>QuizApp</h1>
					<div className='icon ddr2'></div>
				</div>
				{nextQuestion <= 10? (
				<section className='w-screen h-full flex justify-center text-center'>
					<section className='general w-[800px] bg-[#291334] filter saturate-200  shadow-xl px-10 py-5 rounded-2xl min-h-[550px] flex flex-col justify-center items-center'>
						{/* <p className='mb-5'>{questions[nextQuestion].category}</p> */}
						<div className='flex flex-col items-center justify-center gap-10'>
								<p className='max-w-[500px] hyphens-auto text-5xl'>{useReplace(questions[nextQuestion].question)}</p>
									{questions && <Answers questions={questions[nextQuestion]} handleNextQuestion={handleNextQuestion}/>}
						</div>
				</section>
			</section>)
			:
			(
			<section className='w-screen flex flex-row justify-center'>
				<button className='btn btn_success' onClick={getQuestions()}>Replay</button>
			</section>)}
			
		</section>
		</>
	)
}

export default App