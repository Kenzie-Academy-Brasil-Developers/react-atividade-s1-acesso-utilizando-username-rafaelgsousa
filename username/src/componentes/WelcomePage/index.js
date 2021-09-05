function WelcomePage ({ user, setIsLoggedIn }){

    function HandleLogout(){
            setIsLoggedIn(false)
    }
    return (
        <>
            <h2>Bem vindo(a), {user}!</h2>
            <button onClick={HandleLogout}>Logout</button>
        </>
    )
}

export default WelcomePage