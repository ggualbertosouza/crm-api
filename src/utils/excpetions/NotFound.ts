import HttpException from "@/utils/excpetions/httpException.js";

class NotFound extends HttpException {
  constructor(message: string) {
    super(404, message);
  }
}
export default NotFound;
