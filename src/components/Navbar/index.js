import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link className="flex items-center" to="/about">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link className="flex items-center" to="/campaigns">
          Campaigns
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link className="flex items-center" to="/tips">
          Tips
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link className="flex items-center" to="/new">
          Add Product
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link className="flex items-center" to="/all">
          See All
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Link className="flex items-center" to="/">
            <svg
              class="w-10 h-10 mx-7 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#b0d973"
                d="M419.92 42.73 338.05 7.5H174L92.08 42.73A40 40 0 0 0 74.4 57.6L7.5 160 81 212.51v272a20 20 0 0 0 20 20h310a20 20 0 0 0 20-20v-272L504.5 160 437.6 57.6a40 40 0 0 0-17.68-14.87Z"
              />
              <ellipse cx="256" cy="286" fill="#3d8bf2" rx="60" ry="106.67" />
              <path
                fill="#ffbf4a"
                d="M122.41 504.5h267.18c-17.84-40.57-70.9-70-133.59-70s-115.75 29.43-133.59 70Z"
              />
              <path
                fill="#256670"
                d="M256 81a81.19 81.19 0 0 0 78.34-59.87l3.71-13.63H174l3.71 13.63A81.19 81.19 0 0 0 256 81Z"
              />
              <path
                fill="#1e425e"
                d="M510.78 155.91 443.88 53.5a47.42 47.42 0 0 0-21-17.66L341 .61a7.54 7.54 0 0 0-3-.61H174a7.54 7.54 0 0 0-3 .61L89.12 35.84a47.42 47.42 0 0 0-21 17.66L1.22 155.91a7.51 7.51 0 0 0 1.92 10.21l70.36 50.25V484.5A27.54 27.54 0 0 0 101 512h310a27.54 27.54 0 0 0 27.5-27.5V216.37l70.36-50.25a7.51 7.51 0 0 0 1.92-10.21ZM328.23 15l-1.13 4.16A73.83 73.83 0 0 1 256 73.5a73.83 73.83 0 0 1-71.1-54.34L183.77 15ZM263.5 345.77l31.14-31.13A7.5 7.5 0 0 0 284 304l-20.5 20.56v-32.12l31.14-31.14A7.5 7.5 0 0 0 284 250.7l-20.5 20.53v-38.56a7.5 7.5 0 1 0-15 0v38.56L228 250.7a7.5 7.5 0 0 0-10.61 10.6l31.14 31.14v32.12L228 304a7.5 7.5 0 0 0-10.61 10.61l31.14 31.13v32.76a117.24 117.24 0 0 1-45-92.5c0-39.66 20-76.73 52.5-97.84 32.5 21.11 52.5 58.18 52.5 97.84a117.24 117.24 0 0 1-45 92.5ZM256 442c52.25 0 99.95 22.13 121.05 55H135c21.05-32.87 68.75-55 121-55Zm182.5-244.06V169a7.5 7.5 0 0 0-15 0v315.5A12.52 12.52 0 0 1 411 497h-16.68c-20.45-40.36-71.72-67.7-130.82-69.85v-30.3c37.12-23.79 60-65.86 60-110.85 0-46.46-24.4-89.8-63.67-113.12a7.51 7.51 0 0 0-7.66 0C212.9 196.2 188.5 239.54 188.5 286c0 45 22.88 87.06 60 110.85v30.3c-59.1 2.15-110.37 29.49-130.82 69.85H101a12.52 12.52 0 0 1-12.5-12.5V169a7.5 7.5 0 0 0-15 0v28.94l-55.79-39.85 63-96.39a32.41 32.41 0 0 1 14.34-12.08L169 17.8l1.45 5.3A88.85 88.85 0 0 0 256 88.5a88.85 88.85 0 0 0 85.57-65.4l1.43-5.3 74 31.82a32.41 32.41 0 0 1 14.32 12.08l63 96.39Z"
              />
            </svg>
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          <Link className="flex items-center" to="/login">
            Login
          </Link>
        </Button>
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
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <Link className="flex items-center" to="/login">
            Login
          </Link>
        </Button>
      </MobileNav>
    </Navbar>
  );
}
