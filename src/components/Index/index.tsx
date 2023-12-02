import { Flex, Menu } from "antd";
import { Outlet, Link } from "react-router-dom";
import { MenuItemType } from "antd/es/menu/hooks/useItems";

export default function Index() {
  const daysArray = new Array(25).fill(undefined);
  const filledDaysArray = daysArray.map((_, index) => index + 1);
  const items: MenuItemType[] = filledDaysArray.map((day) => ({
    key: day,
    label: <Link to={`day/${day}`}>Day {day}</Link>,
  }));

  return (
    <Flex gap="20px">
      <Menu items={items} />
      <Outlet />
    </Flex>
  );
}
