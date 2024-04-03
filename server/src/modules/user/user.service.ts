import {AppDataSource} from "../../db/data-source";
import {User} from "../../db/entity/User";
import crypto = require('crypto');

export class UserService {
    async create(data: { firstName:string, lastName:string, password:string, email:string }) {
        try {
            const UserRepository = AppDataSource.getRepository(User)
            const newUser = UserRepository.create()
            newUser.firstName = data.firstName;
            newUser.lastName = data.lastName;
            newUser.email = data.email;
            const salt =  this.generateSalt();
            newUser.hashPass = this.hashPassword(data.password,  salt);
            newUser.salt = salt;
            const response = await UserRepository.save(newUser)
            return response
        }catch (e){
            return false
        }
    }

    async getList(filter:any) {
        const UserRepository = AppDataSource.getRepository(User)
        return UserRepository.find(filter)
    }

    private generateSalt() {
        return crypto.randomBytes(16).toString('hex');
    }

    private hashPassword(password, salt) {
        const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512');
        return hash.toString('hex');
    }

    private comparePasswords(password, hashedPassword, salt) {
        const hashedAttempt = this.hashPassword(password, salt);
        return hashedPassword === hashedAttempt;
    }

    async login(body) {
        const UserRepository = AppDataSource.getRepository(User)
        const userToCheck = await UserRepository.findOne({where:{email:body.email} })
        return !(!userToCheck || !this.comparePasswords(body.password, userToCheck.hashPass, userToCheck.salt));
    }
}