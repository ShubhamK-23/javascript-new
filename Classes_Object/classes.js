class user {
    constructor (username, password) {
        this.username = username
        this.password = password
    }
    
    display(){
        console.log(this.username)
    }

}

class testers extends user{
    constructor(username,password,firstName, ID, Lastname) {
        super(username,password);
        this.firstName = firstName
        this.Lastname = Lastname
        this.ID = ID
    }

}

const users = new testers ("mobile","avb","User1",13,"ABC");
users.display();