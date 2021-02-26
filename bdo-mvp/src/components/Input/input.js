import { Input } from "antd"
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  MailOutlined,
} from "@ant-design/icons"

import * as SC from "./input.styles"

const InputDefault = ({ type = "default", placeholder = "" }) => {
  return (
    <SC.InputContainer>
      {type === "password" && (
        <Input.Password
          placeholder={placeholder}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          block
        />
      )}
      {type === "default" && (
        <Input type="text" placeholder={placeholder} block />
      )}
      {type === "user" && (
        <Input
          type="text"
          placeholder={placeholder}
          suffix={<UserOutlined />}
          block
        />
      )}
      {type === "email" && (
        <Input
          type="email"
          placeholder={placeholder}
          suffix={<MailOutlined />}
          block
        />
      )}
    </SC.InputContainer>
  )
}

export default InputDefault