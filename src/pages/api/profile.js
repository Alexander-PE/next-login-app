import { verify } from 'jsonwebtoken' // validar y extraer los valores del token

export default function profileHandler (req, res) {
  const { myTokenName } = req.cookies

  if (!myTokenName) {
    return res.status(401).json({ error: 'not logged' })
  }

  try {
    const user = verify(myTokenName, 'secret')
    console.log(user)
    return res.json({ email: user.email, username: user.username })
  } catch (error) {
    return res.status(400).json({ error: 'invalid token' })
  }
}
