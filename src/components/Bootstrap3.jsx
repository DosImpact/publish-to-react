import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

function Bootstrap3() {
  return (
    <SBootstrap3>
      <Card style={{ width: "600px" }}>
        <Card.Img
          style={{ objectFit: "cover", height: "320px" }}
          variant="top"
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
        />
        <Card.Body>
          <CardTitle>
            스터디 모임에서 간단히 헬퍼와 토픽을 지정해보세요 지정해보세요
            지정해보세요
          </CardTitle>
          <CardText>
            스터디마스터에서는, 모임을 찾는 것은 물론 각 헬퍼를 지정하고 토픽을
            추가할 수 있어요. 클릭 몇번으로, 시간을 절약하는 꿀팁을 공..
          </CardText>
        </Card.Body>
      </Card>
    </SBootstrap3>
  );
}

export default Bootstrap3;

const SBootstrap3 = styled.div``;

const CardTitle = styled.div`
  margin-top: 24px;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.28px;
  font-size: 28px;
  font-weight: 500;

  /* 말줄임 */
  white-space: nowrap; /* 줄 바꿈 금지 */
  overflow: hidden; /* 넘치는 부분 감추기 */
  text-overflow: ellipsis; /* 말줄임 (...) */
  width: 100%; /* 표시할 너비 설정 */
`;

const CardText = styled.div`
  margin-top: 14px;
  opacity: 0.8;
  line-height: 1.65;
  letter-spacing: -0.23px;
  font-size: 14px;
`;

/*
1. img 에서 이미지 요소 사이즈에 맞춤
    object-fit: cover;


2.div 에서 이미지 요소 사이즈에 맞춤
    background-image: url('경로/이미지.jpg');
    background-size: cover;
*/
