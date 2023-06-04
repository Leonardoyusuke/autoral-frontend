import 'tailwindcss/tailwind.css';
import axios from 'axios'
export default function LoginPage() {
    const [registerEnvironment, setRegisterEnvironment] = useState(true)
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [pictureUrl, setPictureUrl] = useState('')
    function setRegister() {
        setRegisterEnvironment(false)
    }
    async function login(event){
        event.preventDefault()
        const payload = {user, password}
        try {
            const login = await axios.post(process.env.REACT_APP_API_URL + "/signin",payload)
            return login
        } catch (error) {
            console.log(error)
        }
    }

    async function register(event){
        event.preventDefault()
        const payload = {user,email,password,pictureUrl}
        try {
            const register = await axios.post(process.env.REACT_APP_API_URL + "/signup",payload)
            return register
        } catch (error) {
            console.log(error)
        }

        console.log(user,email,password,pictureUrl)
    }

    return (
        <div className='bg-gray-200 w-screen h-screen m-[-8px] flex'>
            <div className='mt-10vw ml-15vw'>
            <div className='text-8vw text-blue-500'>FaceBet<p>Conecte-se com seus amigos</p>
                <p className="text-1.5vw -mt-1vw text-black"> do mundo todo enquanto aposta</p> </div>
        </div>
            <div className='mt-10vw ml-15vw w-25vw h-25vw rounded-md border border-gray-500 bg-white'>
                {registerEnvironment ? <>
                    <form className='flex flex-col items-center' onSubmit={login}>
                        <input className='mt-3vw h-2vw w-17vw rounded-sm'  username
                            placeholder='   Email'
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <input className='mt-1vw h-2vw w-17vw rounded-sm'  type='password' placeholder='   Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className={`w-17.5vw h-2vw rounded-md text-white  bg-blue-500  mt-1vw`} login >Entrar</button>
                        <p className="text-blue-500">Esqueceu a senha?</p>
                    </form>
                    <div className="flex flex-col items-center">
                        <div className="mt-0.5vw border border-gray-400 w-17vw"></div>
                        <button className={`w-17.5vw h-2vw rounded-md text-white  bg-green-500 mt-1vw`} onClick={setRegister}>Cadastre-se</button>
                    </div></> :
                    <><form className="flex flex-col items-center" onSubmit={register}>
                        <input className={`mt-3vw h-2vw w-17vw rounded-sm`} username placeholder='   Username'
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <input className={`mt-3vw h-2vw w-17vw rounded-sm`} placeholder='   Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input className={`mt-1vw h-2vw w-17vw rounded-sm`} type='password' placeholder='   Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input className={`mt-1vw h-2vw w-17vw rounded-sm`} type='password' placeholder='   confirm Password' />
                        <input className={`mt-1vw h-2vw w-17vw rounded-sm`} placeholder='   Picture Url'
                            onChange={(e) => setPictureUrl(e.target.value)}
                        />

                        <button className={`w-17.5vw h-2vw rounded-md text-white ${props.login ? "bg-blue-500" : "bg-green-500"} mt-1vw`} login >Registrar</button>
                    </form>
                    </>}
            </div>
        </div>
    )
}
