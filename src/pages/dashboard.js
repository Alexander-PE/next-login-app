import axios from "axios"

const DashboardPage = () => {

    const getprofile = async() => {
        const res = await axios.get("/api/profile")
        console.log(res)
    }

    return (
        <div>
            <h1>dashboard</h1>

            <button onClick={() => getprofile()}>Get profile</button>
        </div>
    )
}

export default DashboardPage 
