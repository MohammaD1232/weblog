const passport = require("passport");
const { Strategy } = require("passport-local");
const bcrypt = require("bcrypt");

const User = require("../models/users");

passport.use(
  new Strategy({ usernameField: "email" }, async (email, password, done) => {
    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        done(null, false, { passwordErr: "Invalid Credentials" });
        return;
      }

      try {
        console.log(user.password);
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          done(null, false, { passwordErr: "Invalid Credentials" });
          return;
        }
      } catch (error) {
        console.log(1);
        done(null, false, "Error validating password: " + error);
        return;
      }

      done(null, user);
    } catch (error) {
      console.log("Error during authentication: " + error);
      done(null, false);
    }
  })
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
