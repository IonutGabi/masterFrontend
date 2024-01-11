import React from "react";
import { LoginFormData } from "./login.vm";

interface Props {
  onLogin: (data: LoginFormData) => void;
}

export const Login: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const [formData, setFormData] = React.useState<LoginFormData>({
    username: "",
    password: "",
  });

  const handleChange =
    (field: keyof LoginFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <div>
            <label>Username: </label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange("username")}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange("password")}
            />
          </div>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
