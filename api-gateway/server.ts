import app from './src/app.js';



function startServer(): void {

    app.listen(3000, () => {
        console.log(`app-gateway runnig on 3000`)
    })
};

startServer()

