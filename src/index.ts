import app from "./server"
import 'dotenv/config'

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Aplicacion conectada correctamente en el puerto ${PORT}`))