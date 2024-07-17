class UserDto {
  _id;
  phone;
  name;
  profile;
  activated;
  createdAt;

  constructor(user) {
    this._id = user._id;
    this.phone = user.phone;
    this.name = user.name;
    this.profile = user.profile
      ? `${process.env.BASE_URL}${user.profile}`
      : null;
    this.activated = user.activated;
    this.createdAt = user.createdAt;
  }
}

module.exports = UserDto;
