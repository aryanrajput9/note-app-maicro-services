import userModel from "../model/user.model.js";



class AuthRepository {

    async create(input: { name: string, email: string, password: string }) {

        const user = await userModel.create(input);
        return user
    };

    async findByEmail(email: string) {

        const user = await userModel.findOne({ email });
        return user
    }
};


export default new AuthRepository()