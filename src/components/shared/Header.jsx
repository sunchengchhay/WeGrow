import {
  IconButton,
  MobileNav,
  Navbar,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { Avatar } from "@mui/material";
import { React, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Logo from "../../assets/logos/logo6.png";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  const currentUser = auth.currentUser;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState(currentUser?.displayName ?? "");
  const userInfo = useSelector((state) => state.user);
  const [photo, setPhoto] = useState("");
  const [isProfilePath, setIsProfilePath] = useState(false);

  useEffect(() => {
    if (userInfo && userInfo.user) {
      setIsAdmin(userInfo.user.isAdmin);
      setPhoto(userInfo.user.photoUrl);
    }
  }, [userInfo]); // Only re-run the effect if userInfo changes

  useEffect(() => {
    // This code will run every time the location changes
    const currentPath = location.pathname;

    // Check if the current path starts with '/profile'
    const startsWithProfile = currentPath.startsWith("/profile");

    setIsProfilePath(startsWithProfile);
  }, [location.pathname]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    toast.success("Logout Successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleRoute = () => {
    navigate("/profile/general");
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 nav-link">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold  text-sm menufont"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-sm menufont"
      >
        <Link to="/course" className="flex items-center">
          Inspiration
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-sm menufont"
      >
        <Link to="/recruitment" className="flex items-center">
          Opportunity
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-sm font-bold menufont"
      >
        <Link to="/contact" className="flex items-center">
          Contact us
        </Link>
      </Typography>
      {isAdmin ? (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 text-sm font-bold menufont"
        >
          <Link to="/dashboards" className="flex items-center">
            Site Adminstration
          </Link>
        </Typography>
      ) : (
        ""
      )}
    </ul>
  );

  return (
    <Navbar className="mx-auto shadow-none max-w-screen-4xl py-1 px-4 lg:px-8 lg:py-1 rounded-none">
      <div className="mx-auto flex items-center justify-between text-blue-gray-900 mb-5 mt-5">
        <div className="flex-3 lg:flex-auto hidden nav-link text-blue-gray-900 lg:block">
          {navList}
        </div>
        <Link
          to={"/"}
          className=" flex-1  absolute left-[41%] sm:left-[44%] md:left-[50%]"
        >
          <img src={Logo} alt="logo" className="w-20 h-20" />
        </Link>
        <div
          className={`flex items-center justify-between mr-4 sm:mr-6 ${
            currentUser
              ? "border rounded-full shadow-xl hover:shadow-lg cursor-pointer"
              : ""
          }`}
        >
          {currentUser ? (
            isProfilePath ? (
              ""
            ) : (
              <Menu>
                <MenuHandler>
                  <Avatar
                    key={photo}
                    sx={{ width: 35, height: 35 }}
                    src={photo}
                  >
                    {username[0]}
                  </Avatar>
                </MenuHandler>
                <MenuList>
                  <MenuItem onClick={handleRoute}>My profiles</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            )
          ) : (
            <>
              <Link
                to="/Login"
                className="hidden font-semibold lg:ml-5 lg:inline-block"
              >
                Login
              </Link>
              <Button
                size="lg"
                className="hidden lg:ml-5 lg:inline-block rounded-2xl hover:bg-blue-400 bg-blue-600 duration-200"
              >
                <Link to="/Signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container">
          {navList}
          {!currentUser && (
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <Link to="/Login">Login</Link>
            </Button>
          )}
        </div>
      </MobileNav>
    </Navbar>
  );
}
