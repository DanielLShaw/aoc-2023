import styled from "styled-components";
import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
const Wrap = styled.div``;

const Container = styled.div`
  margin: 0 auto;
  max-width: min(900px, 95vh);
`;

export default function Layout({ children }: { children: ReactNode }) {
  const { day } = useParams();
  return (
    <Wrap>
      <Typography.Title>Day {day}</Typography.Title>
      <Container>{children}</Container>
    </Wrap>
  );
}
