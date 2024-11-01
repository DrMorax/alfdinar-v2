"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import NextLink from "next/link";
import {
  AccountCircleOutlined,
  DescriptionOutlined,
  HomeOutlined,
  Search,
} from "@mui/icons-material";
import { usePathname } from "next/navigation";

function MobileNav() {
  const pathname = usePathname();

  const routes = ["/", "/search", "/orders", "/profile"];

  const currentIndex = routes.indexOf(pathname);

  const [value, setValue] = React.useState(currentIndex);

  React.useEffect(() => {
    setValue(routes.indexOf(pathname));
  }, [pathname]);

  return (
    <Box className="sm:hidden block fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={NextLink}
          href="/"
          label="الرئيسية"
          icon={<HomeOutlined />}
        />
        <BottomNavigationAction
          component={NextLink}
          href="/search"
          label="البحث"
          icon={<Search />}
        />
        <BottomNavigationAction
          component={NextLink}
          href="/orders"
          label="طلباتك"
          icon={<DescriptionOutlined />}
        />
        <BottomNavigationAction
          component={NextLink}
          href="/profile"
          label="معلوماتك"
          icon={<AccountCircleOutlined />}
        />
      </BottomNavigation>
    </Box>
  );
}

export default function Nav() {
  "use client";
  return <MobileNav />;
}
