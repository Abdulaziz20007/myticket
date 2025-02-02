import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthAdminGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    // console.log(req);

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException({
        message: "Headerda token berilmagan",
      });
    }

    const bearer = authHeader.split(" ")[0];
    const token = authHeader.split(" ")[1];

    if (bearer !== "Bearer" || !token) {
      throw new UnauthorizedException({
        message: "Baerer token berilmagan",
      });
    }

    let user: any;
    try {
      user = this.jwtService.verify(token);
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException({
        message: "Token verification failed",
      });
    }

    console.log("console.log(user.is_creator);", user.is_creator);

    if (user.is_creator == true || user.is_creator == false) {
      req.user = user; //eng muhim joyi
      //   logic
      return true;
    }

    throw new ForbiddenException({
      messsage: "Oka sizda dostup yo'q admin emassiz",
    });
  }
}
