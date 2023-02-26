
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const Createquestion = () => {
  const user = localStorage.getItem('profile')
  const realuser = JSON.parse(user)
  const [question, setQuestion] = useState()
  const handlePost = (e) =>{ 
    e.preventDefault() 
    if (!user){
      toast.error('Please login to post your question')
    }else{
    axios.post(`http://localhost:5000/Createquestion/${realuser.result._id}`, { questionstring:question, username:realuser.result.username})
      .then((res) => {
        console.log(res.data)
        toast('Post successfully');
        setQuestion('')

      })
      .catch((error) => {
        console.log(error)
        toast(error.response.data.message)})
      }
   
  }
  return (
    <div className="container-fluid bg-secondary ml-5">
      <ToastContainer />
      <h2 className="text-center"> Post questions</h2>
      <form className="form-control">
        <input onChange={(e) =>{setQuestion(e.target.value)}} value={question} className="form-control" type="text" placeholder="post your questions here" />
        <br />

        <button onClick={(e) => handlePost(e)} className='btn btn-primary align-middle' type='submit'>post</button>
      </form>

    </div>
  )

  
  }
export default Createquestion
