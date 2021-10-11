import {Module} from "@nestjs/common";
import {HelloController} from "src/controllers/hello.controller";

/**
 * Hello Module
 */
@Module({
  controllers: [HelloController],
})
export class HelloModule {}
