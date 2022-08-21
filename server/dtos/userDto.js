class UserDto {
    id;
    fullname;
    username;
    email;
    

    constructor(user) {
        this.id = user.id;
        this.fullname = user.fullname;
        this.username = user.username;
        this.email = user.email;
    }
}

module.exports = UserDto;