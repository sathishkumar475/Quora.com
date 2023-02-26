import logo192 from './logo192.png'
function Header(){
const user = localStorage.getItem('profile')

const logout = ()=>{
    localStorage.removeItem('profile')
}
    return(
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={logo192} alt="logo" style={{ width: '70px', height: '70px' }} />
                QNA APP
                </a>
                <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                {!user ?
                <a href='/signin' style={{padding:'5px'}}><button className='btn btn-light'>Login</button></a>
                : 
                <>
                <a href='/yourquestions' style={{padding:'5px', color:'white'}}>Your questions</a>
                <a href='/createquestion' style={{padding:'5px', color:'white'}}>Ask question</a>
                <a href='' style={{padding:'5px'}}><button onClick={() => logout()} className='btn btn-light'>Log Out</button></a>
                </>
                }
                </div>
            </div>
        </nav>
    )
}

export default Header