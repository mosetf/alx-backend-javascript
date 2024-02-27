/**
 * Contains the miscellaneous route handlers.
 * @author Joseph O. Kamau <https://github.com/ochieng-kamau>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
