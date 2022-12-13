export const LoginPage = () => {
  return (
    <div>
      <form>
        <label>
          <b>Login</b>
          <input
            type="text"
            name="login"
            placeholder="Arhnold234"
            required
            autocomplete
          ></input>
        </label>
        <label>
          <b>Email</b>
          <input
            type="email"
            name="email"
            placeholder="arhnold@gmail.com"
            required
            autocomplete
          ></input>
        </label>
        <label for="pin">
          <b>Password</b>
          <input
            id="pin"
            type="password"
            name="password"
            minlength="6"
            maxlength="15"
            placeholder="######"
            required
            autocomplete="off"
          ></input>
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
