import { useState } from "react";
import GradientCard from "../components/GradientCard";
import PrimaryButton from "../components/PrimaryButton";
import InterviewTimer from "../components/InterviewTimer";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";





export default function Interview() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(null);
const navigate = useNavigate();
const [userAnswer, setUserAnswer] = useState("");


const videoRef = useRef(null);
const mediaRecorderRef = useRef(null);
const [recording, setRecording] = useState(false);



useEffect(() => {
  if (started) {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;

        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.start();
        setRecording(true);
      });
  }
}, [started]);


const categories = {
  frontend: [
    "Explain how React's virtual DOM works.",
    "What is useEffect and when would you use it?",
  ],
  backend: [
    "Explain REST vs GraphQL.",
    "How does authentication using JWT work?",
  ],
  dsa: [
    "Explain time complexity of merge sort.",
    "How does a hash map work internally?",
  ],
};
const [category, setCategory] = useState("frontend");


  const handleFinish = async () => {

  const response = await fetch("http://localhost:5000/api/interview/evaluate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question: categories[category][0],
      answer: userAnswer, // we’ll add textarea
      category,
    }),
  });


const data = await response.json();

  const parsed = JSON.parse(data.result);



  const finalScore = Math.floor((clarity + confidence + technical) / 3);

  const result = {
    clarity,
    confidence,
    technical,
    score: finalScore,
    category,
    date: new Date(),
  };

//   const stored = JSON.parse(localStorage.getItem("interviews")) || [];
//   stored.push(result);
//   localStorage.setItem("interviews", JSON.stringify(stored));

  setScore(result);
setFinished(true);
navigate("/result");
};


  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-8">Mock Interview</h1>


<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="mb-6 p-3 rounded-lg bg-[#1F2937] border border-[#1E293B]"
>
  <option value="frontend">Frontend</option>
  <option value="backend">Backend</option>
  <option value="dsa">DSA</option>
</select>


      {!started && (
        <PrimaryButton onClick={() => setStarted(true)}>
          Start Interview
        </PrimaryButton>
      )}

      {started && !finished && (
        <div className="space-y-8">

          <InterviewTimer duration={60} onFinish={handleFinish} />

          <GradientCard>
            <h2 className="text-xl font-semibold mb-4">
              Question
            </h2>
            <p>
  {categories[category][0]}
</p>
<textarea
  placeholder="Type your answer here..."
  className="w-full p-4 mt-6 rounded-xl bg-[#1F2937] border border-[#1E293B]"
  onChange={(e) => setUserAnswer(e.target.value)}
/>

          </GradientCard>


<video
  ref={videoRef}
  autoPlay
  muted
  className="w-full h-64 rounded-xl bg-black mt-6"
/>


        </div>
      )}

      {finished && (
        <GradientCard>
          <h2 className="text-2xl font-bold mb-4">
            Interview Completed 🎉
          </h2>
          <p className="text-xl">
            Your Score: <span className="text-blue-400">{score}%</span>
          </p>
        </GradientCard>
      )}
      
    </div>
    
  );
}
