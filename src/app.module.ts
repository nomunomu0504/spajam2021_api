import {Module} from "@nestjs/common";
import {HelloModule} from "src/modules/controller/hello.module";

/**
 * App Module
 */
@Module({
  imports: [HelloModule],
})
export class AppModule {}
