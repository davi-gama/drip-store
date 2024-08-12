import sneaker from "/sneakers-login.png";
import "./SectionLogin.css";

export function SectionLogin() {
  return (
    <div className="section-login">
      <div className="login-form"></div>
      <div className="login-image">
        <img src={sneaker} alt="par de sneakers" />
      </div>
    </div>
  );
}
