
package entities;

import org.mindrot.jbcrypt.BCrypt;

public class User {

    private int id;
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    public User() {

    }

    public User(String username, String password) {
        this.userName = username;
        this.password = password;
    }

    public User(String userName, String firstName, String lastName, String email, String password) {
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
// Lav metode til at hash password, og lav en anden metode der samligner jeres password
// med jeres hashed password.
// HINT du skal bruge bcrypt

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
