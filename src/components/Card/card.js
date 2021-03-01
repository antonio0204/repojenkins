import { Card as CardAnt, Typography, Row, Col } from "antd"
import * as SC from "./card.styles"
const { Title, Text } = Typography;

const Card = ({ title, subtitle, children }) => (
  <SC.CardContainer>
    <SC.CardAnt>
      <Row>
        <Col span={24}>
          <SC.CardTitle>
            <SC.Title level={4}>{title}</SC.Title>
            <SC.Text>{subtitle}</SC.Text>
          </SC.CardTitle>
        </Col>
      </Row>
      {children}
    </SC.CardAnt>
  </SC.CardContainer>
)

export default Card;