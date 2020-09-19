class UserInfo {
  constructor({ nameSelector, description, avatar }) {
    this._name = nameSelector;
    this._description = description;
    this._avatar = avatar;
  }

  getUserInfo() {
    const data = {
      name: this._name.textContent,
      description: this._description.textContent,
      avatar: this._avatar.style.backgroundImage
    };
    return data;
  }

  setUserInfo(name, description,avatar) {
    this._name.textContent = name;
    this._description.textContent = description;
    this._avatar.style.backgroundImage = `url(${avatar})`;
  }
}

export default UserInfo;
