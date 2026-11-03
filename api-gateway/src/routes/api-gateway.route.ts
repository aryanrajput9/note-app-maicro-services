import { Router, type Request, type Response } from 'express';


const routes = Router();

routes.get("/api-gateway", (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Api gateway is running successfully"
    })
})


export default routes