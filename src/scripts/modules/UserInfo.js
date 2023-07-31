class UserInfo {
    constructor({ usernameSelector, userDescriptionSelector, userAvatarSelector }) {
        this._username = document.querySelector(usernameSelector);
        this._userDescription = document.querySelector(userDescriptionSelector);
        this._userAvatar = document.querySelector(userAvatarSelector);
    }

    getUserInfo() {
        return {
            username: this._username.textContent,
            description: this._userDescription.textContent
        };
    }

    setUserInfo({ username, description }) {
        this._username.textContent = username;
        this._userDescription.textContent = description;
    }

    setUserAvatar(avatar) {
        this._userAvatar.src = avatar;
    }
}

export { UserInfo };