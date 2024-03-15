module.exports = class User {
    constructor(UUID, firstname, lastname, username, email, password, data) {
        this.UUID = UUID
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;

        this.password = password;

        this.data = data;
    }
};