module.exports = {
    /* vars hidden on mongo server */
    //PORT: process.env.PORT,

    /* vars not hidden */
    PORT: 8000,

    /* remote db, vars hidden on mongo server */
    //DB: process.env.DB

    /* remote db, vars unhidden */
    DB: 'mongodb+srv://rhino-gt:sNtWTKYeDw8MOICE@cluster0-fvdhj.mongodb.net/test?retryWrites=true&w=majority'

    /* local db */
    //DB: 'mongodb://localhost:27017/mernapp'
};