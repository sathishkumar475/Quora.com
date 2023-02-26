import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import axios from 'axios'

const Answers = () => {
 const {id} = useParams()
 const [question, setQuestion] = useState()
 const [answer, setAnswer] = useState()
 const user = localStorage.getItem('profile')
 const realsuser = JSON.parse(user)
 console.log(id)

 const handleAnswerSubmit = (e) =>{
    e.preventDefault()
    axios.post(`http://localhost:5000/updateanswer/${id}`, {answer:answer, userId: realsuser.result._id})
    .then((res) =>{
        toast.success('Answer posted')
        setAnswer('')
    })
 }
 useEffect(()=>{
    setTimeout(()=>{
 axios.get(`http://localhost:5000/getquestion/${id}`).then((res) =>setQuestion(res.data.data))
     },1000)
 },[answer])
 console.log(question)
    return (
        <> 
        <div className="container-fluid bg-secondary ml-5">
            <ToastContainer />
            {question ?
            <>
            <div className="card" >
                <div class="card-body">
                    <blockquote className="blockquote mb-0">
                        <h2>{question.question}</h2>
                        <br/>
                        <footer className="blockquote-footer"> <cite title="Source Title">{question.userId[0].username}</cite></footer>
                    </blockquote>
                    <button className="btn">{question.likes.length}<i class="fa fa-thumbs-up fa-2x" aria-hidden="true"></i></button>
                </div>
            </div>
            <br />
            <form>
                <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" placeholder="Write your answers"></textarea>
                <button onClick={(e) => handleAnswerSubmit(e)} className="btn btn-primary">Submit</button>
            </form>
            <div style={{ marginTop: '50px' }}>
                <h4>All answers</h4>
                <div className="col" >
                    { question && question.answers.map((d) =>
                    <>
                    <div class="card">
                        <div class="card-header">
                            {d.username}
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>{d.actualanswer}</p>
                            </blockquote>
                        </div>
                    </div>
                    <br />
                    </>

)}
                </div>
            </div>
            </>
:<h2 className='text-center'>Loading ....</h2>}
        </div>
        </>

    )
}

export default Answers