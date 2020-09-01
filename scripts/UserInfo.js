class UserInfo {
    constructor({nameSelector, description}) {
        this._name = document.querySelector(nameSelector);
        this._description = document.querySelector(description);
    }

    getUserInfo() {
        const data = {
            name: this._name.textContent,
            description: this._description.textContent 
        }
        return data;
    }

    setUserInfo(name, description) {
        this._name = name;
        this._description = description;
    }
}