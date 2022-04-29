import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController { 
    constructor(private auth: AuthService) { }

    @Post('signup')
    signup() {
        return this.auth.signup();
    }

    @Post('signin')
    signin() {
        return this.auth.signin();
    }
}
