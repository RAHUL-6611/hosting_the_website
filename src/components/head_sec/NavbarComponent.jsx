import React,{useState} from 'react';
// import Navbar from "reactjs-navbar";
// import logo from "../assets/logo.png";
// import {Loader} from "react-loader-spinner";
import {
  faUsers,
  faBookOpen,
  faGlobe,
  faChartPie,
  faCogs /*...*/,
  faAnchor,
  faDizzy,
  faAdjust,
  faBell,
  faGhost,
  faFan,
  faCarSide,
    faJedi,
    faWater,
    faKey
} from "@fortawesome/free-solid-svg-icons";
 
import "reactjs-navbar/dist/index.css";
import "./.css"

const NavbarComponent = () => {

    // const [isLoading, setIsLoading] = useState(false);
  return (
    <Navbar
        // logo={logo}
        // loader={<Loader type="Puff" color="#D85B5B" height={25} width={25} />}
        // isLoading={isLoading}
        className="fixed_navbar"
        helpCallback={() => {
          // alert("I need help... and coffee...");
        }}
        menuItems={[
          {
            title: "Academics",
            icon: faUsers,
            isAuth: true,
            onClick: () => {
              // What you want to do...
              alert("Its coffee time...");
            },
          },
          
          {
            title: "For Faculty and Staff",
            icon: faCogs,
            isAuth: true,
            subItems: [
              {
                title: "Faculty",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("Faculty ");
                },
              },
              {
                title: "Staff",
                icon : faDizzy,
                isAuth: true,
                // subItems: [
                //   { title: "Subitem 2-1", icon: faAdjust, isAuth: true },
                //   {
                //     title: "Subitem 2-2",
                //     icon: faBell,
                //     isAuth: true,
                //     subItems: [
                //       {
                //         title: "Subitem 2-2-1",
                //         icon: faGhost,
                //         isAuth: true,
                //         subItems: [
                //           {
                //             title: "Subitem 2-2-2-1",
                //             icon: faFan,
                //             isAuth: true,
                //           },
                          // {
                          //   title: "Subitem 2-2-2-2",
                          //   icon: faCarSide,
                          //   isAuth: true,
                          // },
                          // {
                          //   title: "Subitem 2-2-2-3",
                          //   icon: faJedi,
                          //   isAuth: true,
                          // },
                        //   {
                        //     title: "Subitem 2-2-2-4",
                        //     icon: faLaughBeam,
                        //     isAuth: true,
                        //   },
                        // ],
                      // },
                      // {
                        // title: "Subitem 2-2-2",
                        // icon: faKey,
                        // isAuth: true,
                      // },
                    // ],
                  // },
                //   {
                //     title: "Make request",
                //     icon: faCheese,
                //     isAuth: true,
                    // onClick: () => {
                    //   // What you want to do...
                    //   setIsLoading(true , () =>
                    //     setTimeout(() => {
                    //       setIsLoading(false);
                    //     }, 2000)
                    //   );
                    // },
                //   },
                // ],
              },
              {
                title: "Subitem 3",
                icon: faWater,
                isAuth: () => {
                  // Claim authorization logic...
                  return false;
                },
              },
            ],
          },
          {
            title: "Research",
            icon: faChartPie,
            isAuth: true,
          },
          {
            title: "Alumni",
            icon: faChartPie,
            isAuth: true,
          },
          
        ]}
      />
  );
};

export default NavbarComponent;
