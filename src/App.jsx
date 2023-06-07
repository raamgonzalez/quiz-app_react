import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import useReplace from './hook/getReplace'
import Spinner from './components/Spinner'
import  ConfettiExplosion from  'react-confetti-explosion' ;


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


	const getRandomAnswers = () => {
		const answersIncorrect = [...questions[nextQuestion].incorrect_answers]
    const randomIndex = Math.floor(Math.random() * 4)
    const answersRandom = [...answersIncorrect]
    answersRandom.splice(randomIndex, 0, questions[nextQuestion].correct_answer)
		return answersRandom
	}

	const handleCheckAnswer = (answer) => {
		if(answer === questions[nextQuestion].correct_answer){
			setCorrectAnswer(true)
		}else{
			setCorrectAnswer(false)
		}
		if(correctAnswer){
			setPoints(points + 1)
		}
	}

	const mediumProps = {
		force: 0.6,
		duration: 2500,
		particleCount: 100,
		width: 1000,
		colors: ['#FF0000', '#008000', '#800080', '#FFFF00', '#000080'],
	};



useEffect(()=>{
	getQuestions()
},[])

const handleNextQuestion = () => {
	setNextQuestion(nextQuestion + 1)
}	

const handleReplay = () => {
	setNextQuestion(0)
	setPoints(0)
	setCorrectAnswer(false)
	getQuestions()
}



if (loading) return <Spinner/>

	const Quiz = () => {
		return(				
			<>
				<p className='mb-5 text-3xl'>{questions[nextQuestion].category}</p>
				<div className='flex flex-col items-center justify-center gap-10'>
					<p className='max-w-[500px] hyphens-auto text-5xl'>{useReplace(questions[nextQuestion].question)}</p>
					<section className='flex max-h-96 flex-row gap-2 flex-wrap place-content-center items-center relative'>
						{
							getRandomAnswers().map((answer, index) => {
								return <button onClick={() => { handleNextQuestion(), handleCheckAnswer(answer)}}  className="btn w-96 shadow-md"  key={index}>{useReplace(answer)}</button>
							})
						}
						{correctAnswer && <ConfettiExplosion  {...mediumProps}/>}
					</section>
				</div>
				<div className="absolute bottom-10 left-[600px] flex">
					<p>Quiz:</p>
					<p>{nextQuestion+1}-10</p>
				</div>
				<div className="absolute bottom-0 left-[600px] flex">
					<p>Points:</p>
					<p>{points}</p>
				</div>
			</>)
	}


	const Final = () => {

		return (
			<section className='h-full w-full flex flex-col justify-center items-center place-content-center'>
				<button className='btn btn_success' onClick={handleReplay}>Replay</button>
				<p className='mt-10 text-5xl text-center'> Total points:  <span className='bold'>{points}</span></p>
			</section>
		)
	}



	return(
			<section className='crt w-screen h-full'>
				<div className='flex flex-row justify-center relative'>
					<h1 className='text-8xl font-bold mb-10'>QuizApp</h1>
					<div className='absolute top-2 icon ddr2'>?</div>
				</div>
				<section className='w-screen h-full flex justify-center text-center'>
					<section className='container w-[800px] filter saturate-200  shadow-xl px-10 py-5 rounded-2xl min-h-[600px] flex flex-col justify-center items-center'>
					{nextQuestion === 10 
					? <Final/> 
					:<Quiz/>}
					</section>
				</section>
			</section>
	)
}

export default App


// )
// 				:
// 				(
// 				<section className='w-screen flex flex-row justify-center'>
// 					<button className='btn btn-success' onClick={getQuestions()}>Replay</button>
// 				</section>
// 				)
// 				}