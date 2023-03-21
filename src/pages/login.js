import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function LoginPage () {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const router = useRouter()

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value)
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(credentials)
    const res = await axios.post('/api/auth/login', credentials)

    if (res.status === 200) {
      router.push('/dashboard')
    }
    console.log(res)
  }

  return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                <button>Login</button>
            </form>
        </div>
  )
}
