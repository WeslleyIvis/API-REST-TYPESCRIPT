import express from 'express'
import { AppDataSoucer } from './data-source'
import routes from './routes';

AppDataSoucer.initialize().then(() => {
    const app = express();

    app.use(express.json())

    app.use(routes)

    app.get('/', (req, res) => {
        return res.send('Its ok?')
    })

    return app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta: ${process.env.PORT}`))
})