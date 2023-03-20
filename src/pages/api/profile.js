import {verify} from 'jsonwebtoken';  // validar y extraer los valores del token

export default function profileHandler(req, res) {

    const {myTokenName} = req.cookies

    const user = verify(myTokenName, "secret")
    console.log(user)

    return res.json({
        user: "user123"
    })
}