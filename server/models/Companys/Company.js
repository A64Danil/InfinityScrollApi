const { ActiveRecordEntity } = require('../ActiveRecordEntity')
//const AppError = require('../../../utils/appError')
// namespace MyProject\Models\Companys;

// use MyProject\Exceptions\InvalidArgumentException;


class Company extends ActiveRecordEntity {

    //id

    handle

    name

    website

    industry // 5

    size

    type

    founded

    city

    state

    country_code

    constructor(body) {
        super();
        if (!body) return this;
        console.log('company constructor')
        // console.log(body)
        // TODO: продумать конструктор юзера
        this.id = body.id;
        this.name = body.name;
        this.email = body.email;
        this.role = "user";
        this.passwordHash = "sha256:" + body.password;
        // this.passwordHash = body.passwordHash;
    }

    /**
     * Get a name. (public function)
     * @return {string} The name.
     */
    getName() {
        return this.name;

    }

    /**
     * Get an email. (public function)
     * @return {string} The email.
     */
    getEmail() {
        return this.email;
    }
    
    /**
     * Get a token. (public function)
     * @return {string} Auth token.
     */
    // getAuthToken() {
    //     return this.#authToken;
    // }


    /**
     * Get table name. (protected static function)
     * @return {string}
     */
    // TODO: подумать как сделать чтобы метод был доступен и объекту и экземпляру
    getTableName(){
        return 'companys';
    }
    static getTableName(){
        return 'companys';
    }

}

module.exports = {
    Company
}