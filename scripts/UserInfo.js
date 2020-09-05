class UserInfo {
  constructor({ nameSelector, description }) {
    this._name = nameSelector;
    this._description = description;
  }

  getUserInfo() {
    const data = {
      name: this._name.textContent,
      description: this._description.textContent,
    };
    return data;
  }

  setUserInfo(name, description) {
    this._name.textContent = name;
    this._description.textContent = description;
  }
}

export default UserInfo;
