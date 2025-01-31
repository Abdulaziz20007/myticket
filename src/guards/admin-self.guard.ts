import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AdminSelfGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const admin = req.admin;
    const adminId = +req.params.id;

    if (!admin || !admin.is_active) {
      throw new ForbiddenException("Ruxsat berilmagan");
    }

    if (admin.is_creator) {
      return true;
    }

    if (admin.id !== adminId) {
      throw new ForbiddenException("Ruxsat berilmagan");
    }

    return true;
  }
}
