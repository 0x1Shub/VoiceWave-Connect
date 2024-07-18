const Jimp = require("jimp");
const path = require("path");
const userService = require("../services/user-service");
const UserDto = require("../dtos/user-dtos");

class ActivateController {
  async activate(req, res) {
    // console.log("Request Body: ", req.body);
    const { name, profile } = req.body;
    if (!name || !profile) {
      res.status(400).json({ message: "All field are require!" });
    }

    // Image Base64

    const buffer = Buffer.from(
      profile.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
      "base64"
    );

    const imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;

    try {
      const jimpRes = await Jimp.read(buffer);
      jimpRes
        .resize(150, Jimp.AUTO)
        .write(path.resolve(__dirname, `../storage/${imagePath}`));
    } catch (err) {
      res.status(500).json({ message: "Server internal error" });
    }

    const userId = req.user._id;

    // Update User
    try {
      const user = await userService.findUser({ _id: userId });
      if (!user) {
        res.status(404).json({ message: "User not found!" });
      }
      user.activated = true;
      user.name = name;
      user.profile = `/storage/${imagePath}`;
      user.save();
      res.json({ user: new UserDto(user), auth: true });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
}

module.exports = new ActivateController();
