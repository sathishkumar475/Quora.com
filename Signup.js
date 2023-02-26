import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = ()=>{
    const [firstname, setFirstname] = useState()
    const [email, setEmail] = useState()
    const [lastname, setLastname] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5000/user/signup',{email:email, password:password, confirmPassword:password2, firstName:firstname, lastName:lastname})
        .then((res) => {
            console.log(res)
            toast('signup success')
            setEmail('')
            setFirstname('')
            setLastname('')
            setPassword('')
            setPassword2('')
        })
        .catch((error) => {
            console.log(error)
            toast(error.response.data.message)})
    }

    return(
        <>
        <div className="container text-center">
            <ToastContainer />
        <div style={{ padding: '50px' }}>
        <form>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px' }}>
            <input onChange={(e) => setFirstname(e.target.value)} value={firstname} className="form-control" placeholder="Firstname"></input>
            </div>
            <br/>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px' }}>
            <input required onChange={(e) => setLastname(e.target.value)} value={lastname} className="form-control" placeholder="Lastname"></input>
            </div>
            <br/>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px' }}>
            <input required onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" placeholder="E-mail"></input>
            </div>
            <br/>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px'}}>
            <input type='password' required onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" placeholder="Password"></input>
            </div>
            <br/>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px'}}>
            <input type='password' required onChange={(e) => setPassword2(e.target.value)} value={password2} className="form-control" placeholder="Confirm Password"></input>
            </div>
            <br/>
            <button onClick={(e) => handleSubmit(e)} className="btn btn-primary pa-10" type="submit">Sign Up</button>
        </form>
        </div>
        </div>
        </>
    )
}

export default Signup
