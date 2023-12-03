import { Flex, Dropdown, Space, Typography } from "antd";
import { Outlet, Link } from "react-router-dom";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { useParams } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Container = styled(Flex)`
  margin: 0 auto;
  max-width: min(900px, 95vh);
`;
export default function Index() {
  const { day } = useParams();
  const daysArray = new Array(25).fill(undefined);
  const filledDaysArray = daysArray.map((_, index) => index + 1);
  const items: MenuItemType[] = filledDaysArray.map((day) => ({
    key: day,
    label: <Link to={`day/${day}`}>Day {day}</Link>,
  }));

  return (
    <Container vertical>
      <Flex gap="8px" justify="space-between">
        <Typography.Title>AOC 2023</Typography.Title>
        <Dropdown menu={{ items }}>
          <Space>
            Day {day} <DownOutlined />
          </Space>
        </Dropdown>
      </Flex>
      <Outlet />
    </Container>
  );
}
