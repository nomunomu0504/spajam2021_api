import {Body, Controller, Post} from "@nestjs/common";

/**
 * Hello Controller
 */
@Controller("hello")
export class HelloController {
  /**
   * Say Hello
   * @param {string} name
   * @returns {string}
   */
  @Post()
  public sayHello(@Body() name: string): string {
    return `Hello ${name}`;
  }
}
