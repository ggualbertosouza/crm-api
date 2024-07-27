import HttpException from "@/utils/excpetions/httpException.js";

class BadRequest extends HttpException {
  constructor(message: string) {
    super(400, message);
  }
}
export default BadRequest;
