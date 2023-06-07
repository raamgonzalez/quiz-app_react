// import { useEffect, useRef, useState } from "react"
// import  ConfettiExplosion from  'react-confetti-explosion' ;
// import useReplace from "../hook/getReplace";




// export default function Answers({questions, handleNextQuestion}){
// 	const [correctAnswer, setCorrectAnswer] = useState(false)
// 	const [points, setPoints] = useState(0)




// 	const getRandomAnswers = () => {
// 		const answersIncorrect = [...questions.incorrect_answers]
//     const randomIndex = Math.floor(Math.random() * 4)
//     const answers = [...answersIncorrect]
//     answers.splice(randomIndex, 0, questions.correct_answer)
// 		return answers
// 	}

// 	const handleCheckAnswer = (answer) => {
// 		if(answer === questions.correct_answer){	
// 			setCorrectAnswer(true)
// 		}else{
// 			setCorrectAnswer(false)
// 		}
// 		if(correctAnswer){
// 			setPoints(points + 1)
// 		}
// 	}

// 	const mediumProps = {
// 		force: 0.6,
// 		duration: 2500,
// 		particleCount: 100,
// 		width: 1000,
// 		colors: ['#FF0000', '#008000', '#800080', '#FFFF00', '#000080'],
// 	};


// 	return (
// 		<section className='flex flex-row gap-2 flex-wrap place-content-center items-center relative'>
// 		{
// 			getRandomAnswers().map((answer, index) => {
// 				return <button onClick={() => { handleNextQuestion(), handleCheckAnswer(answer)}}  className="btn w-96 shadow-md"  key={index}>{useReplace(answer)}</button>
// 			})
// 		}
// 		{correctAnswer && <ConfettiExplosion  {...mediumProps}/>}
// 		<div className="absolute top-64 right-0 flex">
// 			<p>Points:</p>
// 			<p>{points}</p>
// 		</div>
// 	</section>
// 	)
// }