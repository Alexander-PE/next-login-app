import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

export default function loginHandler (req, res) {
  const { email, password } = req.body

  if (!email || !password) return res.json('validate your entries')

  if (email === 'admin@local.local' && password === 'admin') {
    // GENERATE THE JWT SIGN WITH THE PAYLOAD
    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // exp time of 30 days
      email: 'admin@local.local',
      username: 'alex'
    }, 'secret',
    { expiresIn: 60 * 60 }
    )

    const serialized = serialize('myTokenName', token, {
      httpOnly: true, // we hide the cookie for the dev tools, etc
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 30, // exp time of 30 days
      path: '/'
    })

    // for security we are going to set the token into the header
    res.setHeader('Set-Cookie', serialized) // saving the token into cookies
    return res.json('login succesfully').status(200)
  }

  return res.status(400).json({ error: 'invalid credentials' })
}
