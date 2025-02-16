import { useNavigate } from "react-router-dom";

const HomePage = () =>{
    const navigate = useNavigate()
    const handleButton = () =>{
        navigate('/search')

    }
    return (
        <div className="flex flex-col items-center mt-10 justify-center p-4 m-5 ">
            <button className="rounded-lg font-bold p-4 m-5 bg-red-500" onClick={handleButton}>Get Start</button>
        </div>
    )
}

export default HomePage;