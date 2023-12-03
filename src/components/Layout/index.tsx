import styled from "styled-components";
import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
const Wrap = styled.div``;

export default function DayLayout({ children }: { children: ReactNode }) {
  const { day } = useParams();
  return (
    <Wrap>
      <Typography.Title level={2}>Day {day}</Typography.Title>
      {children}
    </Wrap>
  );
}
