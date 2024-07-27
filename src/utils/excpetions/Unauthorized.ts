import HttpException from "@/utils/excpetions/httpException.js";

class Unauthorized extends HttpException {
  constructor(message: string) {
    super(401, message);
  }
}
export default Unauthorized;
