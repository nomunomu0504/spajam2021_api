import {Body, Controller, Get, Post} from "@nestjs/common";

/**
 * Hello Controller
 */
@Controller("hello")
export class HelloController {
  /**
   * Say Hello
   * @returns {string}
   */
  @Get()
  public sayHello(): string {
    return "Hello World.";
  }
}
