class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    getPassword() {
        return this.password.replace(/./g, "*");
    }

    setPassword(newPassword) {
        let containsNumber = false;
        let containsUppercase = false;
        for (let i = 0; i < newPassword.length; i++) {
            const char = newPassword.charAt(i);
            if (!isNaN(char)) {
                containsNumber = true;
            } else if (char === char.toUpperCase()) {
                containsUppercase = true;
            }
        }
        if (newPassword.length >= 8 & containsNumber && containsUppercase) {
            this.password = newPassword;
        } else {
            console.log(
                "Error: Password must be at least 8 characters long and conatain at least one number and one Uppercase latter."
            );

        }
    }
}
const user = new User("Johndoe", "Password123");
console.log(user.getPassword());

user.setPassword("myPassword");
user.setPassword("MyPassword");
user.getPassword("Mypassword123");
console.log(user.getPassword());