import Confetti from 'react-dom-confetti';


export default function Confeti (someProp) {

  console.log(someProp)

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#0022e2", "#495ca4", "#efe7e6",]
};

return <Confetti active={ someProp } config={ config }/>

}