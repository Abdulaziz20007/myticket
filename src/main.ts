import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { CustomerValidationPipe } from "./pipe/validation.pipe";
import { DocumentBuilder } from "@nestjs/swagger";
import { SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  try {
    const PORT = process.env.PORT ?? 3003;
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
      .setTitle("MyTicket API")
      .setDescription("The MyTicket API description")
      .addBearerAuth()
      .setVersion("1.0")
      .build();


    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("", app, documentFactory);

    // app.useGlobalPipes(new CustomerValidationPipe());
    await app.listen(PORT, () => {
      console.log(`server started at : http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
