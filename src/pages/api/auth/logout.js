import { verify } from 'jsonwebtoken'
import { serialize } from 'cookie'

export default function logoutHandler (req, res) {
  const { myTokenName } = req.cookies

  if (!myTokenName) {
    return res.status(401).json({ error: 'not logged' })
  }

  try {
    verify(myTokenName, 'secret')
    const serialized = serialize('myTokenName', null, {
      httpOnly: true, // we hide the cookie for the dev tools, etc
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/'
    })
    res.setHeader('Set-Cookie', serialized)
    res.status(200).json('logout succesfully')
  } catch (error) {
    return res.status(400).json({ error: 'Error' })
  }
}
