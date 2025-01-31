import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { CustomValidationPipe } from "./pipe/validation.pipe";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  try {
    const PORT = process.env.PORT ?? 3003;
    const app = await NestFactory.create(AppModule);
    // app.useGlobalPipes(new CustomValidationPipe());

    const config = new DocumentBuilder()
      .setTitle("Swagger")
      .setDescription("API description")
      .setVersion("1.0")
      .addTag("swagger")
      .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("", app, documentFactory);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(PORT, () => {
      console.log(`server started at : http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
