import { Button as ButtonAnt } from "antd"

import * as SC from "./button.style"

const Button = ({
  size = "middle",
  block = true,
  children,
  htmlType = "button",
  ...rest
}) => (
  <SC.ButtonContainer>
    <ButtonAnt
      className="button"
      type="primary"
      size={size}
      block={block}
      htmlType={htmlType}
      {...rest}
    >
      {children}
    </ButtonAnt>
  </SC.ButtonContainer>
)
export default Button