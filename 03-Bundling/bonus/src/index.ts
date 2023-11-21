import { css } from "@emotion/css";

const rootElement = document.getElementById("root");
const styles = css`
  background-color: indianred;
  border: 1px solid black;
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
`;

rootElement.classList.add(styles);
