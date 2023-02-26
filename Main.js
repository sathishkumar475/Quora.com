import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const Main = ()=>{
const [question, setQuestion] = useState()
const navigate = useNavigate()
const user = localStorage.getItem('profile')
const [like, setLikes]= useState(false)
const realuser = JSON.parse(user)

const handleLikes =(id)=>{
axios.post(`${process.env.REACT_APP_BE_URL}updatelike/${id}`,{userid: realuser.result._id}).then((res)=>{setLikes(!likes)})
}

const handleLike= (id)=>{
const likeduser = question.filter((d) => {
    if (d._id === id){
        return d.likes
    }} )
const isliked = likeduser[0].likes.map((d) => d === realuser.result._id)

if(isliked){
    toast('Already liked')
}
else{
    handleLikes(id)
}
}
useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BE_URL}getquestions`).then((res) =>setQuestion(res.data.data))
},[])



    return(
        <div className="container-fluid bg-secondary ml-5">
            <ToastContainer />
            <h2 className="text-center pa-3 mt-2">Topics</h2>
           {question && question.map((d) =>
            <div className="card">
                <div class="card-body">
                    <blockquote className="blockquote mb-0">
                    <p>{d.question}</p>
                    <footer className="blockquote-footer">{d.userId[0].username} <cite title="Source Title"></cite></footer>
                    </blockquote>
                    <button onClick={()=> navigate(`/answers/${d._id}`)} className="btn">{d.answers.length}<i class="fa fa-comments fa-2x" aria-hidden="true"></i></button>
                    <button onClick={()=>{handleLikes(d._id)}} className="btn">{d.likes.length}<i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i></button>
                </div>
            </div>
)}
            <br/>    
            
            <br/>    
        </div>
    )
}

export default Main