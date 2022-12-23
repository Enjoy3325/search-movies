export const LoginPage = () => {
  return (
    <div>
      <form>
        <b>Login</b>
        <label>
          <input
            type="text"
            name="login"
            placeholder="Arhnold234"
            required
            autoComplete
          ></input>
        </label>
        <b>Email</b>
        <label>
          <input
            type="email"
            name="email"
            placeholder="arhnold@gmail.com"
            required
            autoComplete
          ></input>
        </label>
        <b>Password</b>
        <label for="pin">
          <input
            id="pin"
            type="password"
            name="password"
            minlength="6"
            maxlength="15"
            placeholder="######"
            required
            autoComplete={false}
          ></input>
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
