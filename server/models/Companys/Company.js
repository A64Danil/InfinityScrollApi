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

    constructor(body, isFullSchema = false) {
        super();
        if (!body) return this;

        this.id = body.id;
        this.name = body.name;
        this.website = body.website;
        this.industry = body.industry;
        if (isFullSchema === true) {
            this.handle = body.handle;
            this.size = body.size;
            this.type = body.type;
            this.founded = body.founded;
            this.city = body.city;
            this.state = body.state;
            this.country_code = body.country_code;
        }

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