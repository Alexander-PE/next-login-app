import axios from 'axios'
import { useRouter } from 'next/router'

const DashboardPage = () => {
  const router = useRouter()

  const getprofile = async () => {
    const res = await axios.get('/api/profile')
    console.log(res)
  }

  const logout = async () => {
    try {
      await axios.post('/api/auth/logout')
      router.push('/login')
    } catch (e) {
      console.log(e)
    }
  }

  return (
        <div>
            <h1>dashboard</h1>

            <button onClick={() => getprofile()}>Get profile</button>
            <button onClick={() => logout()}>Logout</button>
        </div>
  )
}

export default DashboardPage
