import Link from "next/link";
import React from "react";

function SideAction(props) {
  console.log(props.position)
  let themePrimary;
  let themeSecondary;
  if (props.theme === "light") {
    themePrimary = "page1";
    themeSecondary = "pageMenu";
  } else {
    themePrimary = "pageMenu";
    themeSecondary = "page1";
  }

  let profileLinkClassess;
  let goBackLinkClassess;
  if (props.position === 1) {
    profileLinkClassess =
      "w-14 h-14 hover:w-[3.7rem] hover:h-[3.7rem] active:w-10 active:h-10 duration-200 hover:animate-pulse hover:cursor-pointer absolute left-10 bottom-28";
    goBackLinkClassess =
      "w-14 h-14 hover:w-[3.7rem] hover:h-[3.7rem] active:w-10 active:h-10 duration-200 hover:animate-pulse hover:cursor-pointer absolute left-28 bottom-10";
  }
  if (props.position === 2) {
    profileLinkClassess =
      "w-14 h-14 hover:w-[3.7rem] hover:h-[3.7rem] active:w-10 active:h-10 duration-200 hover:animate-pulse hover:cursor-pointer absolute left-10 top-28";
    goBackLinkClassess =
      "w-14 h-14 hover:w-[3.7rem] hover:h-[3.7rem] active:w-10 active:h-10 duration-200 hover:animate-pulse hover:cursor-pointer absolute left-28 top-10";
  }
  if (props.position === 3) {
    profileLinkClassess =
      "w-14 h-14 hover:w-[3.7rem] hover:h-[3.7rem] active:w-10 active:h-10 duration-200 hover:animate-pulse hover:cursor-pointer absolute right-10 top-28";
    goBackLinkClassess =
      "w-14 h-14 hover:w-[3.7rem] hover:h-[3.7rem] active:w-10 active:h-10 duration-200 hover:animate-pulse hover:cursor-pointer absolute right-28 top-10";
  }

  const goBackSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 17"
      className={`w-full h-full stroke-${themeSecondary}`}
    >
      <path d="M15 7.5c0 3.033-2.467 5.5-5.5 5.5H6.588l2.646 2.646-.707.707L4.674 12.5l3.854-3.854.707.707L6.588 12H9.5c2.481 0 4.5-2.019 4.5-4.5S11.981 3 9.5 3H2.417V2H9.5C12.533 2 15 4.467 15 7.5z"></path>
    </svg>
  );

  const profileSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={`w-full h-full fill-${themeSecondary}`}
    >
      <g>
        <g fill="none" fillRule="evenodd" strokeWidth="0.14">
          <g fill="#000" transform="translate(-140 -2159)">
            <g transform="translate(56 160)">
              <path
                className={`fill-${themeSecondary}`}
                d="M100.563 2017H87.438c-.706 0-1.228-.697-.961-1.338 1.236-2.964 4.14-4.662 7.523-4.662 3.384 0 6.288 1.698 7.524 4.662.267.641-.255 1.338-.961 1.338m-10.646-12c0-2.206 1.832-4 4.083-4 2.252 0 4.083 1.794 4.083 4s-1.831 4-4.083 4c-2.251 0-4.083-1.794-4.083-4m14.039 11.636c-.742-3.359-3.064-5.838-6.119-6.963 1.619-1.277 2.563-3.342 2.216-5.603-.402-2.623-2.63-4.722-5.318-5.028-3.712-.423-6.86 2.407-6.86 5.958 0 1.89.894 3.574 2.289 4.673-3.057 1.125-5.377 3.604-6.12 6.963-.27 1.221.735 2.364 2.01 2.364h15.892c1.276 0 2.28-1.143 2.01-2.364"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );

  let sideActionClasses;
  if (props.position === 1) {
    sideActionClasses = `absolute w-48 h-48 rounded-full bg-${themePrimary} -top-28 -right-28 z-50 hover:w-80 hover:h-80 hover:-top-36 hover:-right-36 duration-200 shadow-[rgba(0,_0,_0,_0.6)_0px_30px_90px]`;
  }
  if (props.position === 2) {
    sideActionClasses = `absolute w-48 h-48 rounded-full bg-${themePrimary} -right-28 -bottom-28 z-50 hover:w-80 hover:h-80 hover:-right-36 hover:-bottom-36 duration-200 shadow-[rgba(0,_0,_0,_0.6)_0px_30px_90px]`;
  }
  if (props.position === 3) {
    sideActionClasses = `absolute w-48 h-48 rounded-full bg-${themePrimary} -left-28 -bottom-28 z-50 hover:w-80 hover:h-80 hover:-right-36 hover:-bottom-36 duration-200 shadow-[rgba(0,_0,_0,_0.6)_0px_30px_90px]`;
  }

  return (
    <div className={sideActionClasses}>
      <div className="relative w-full h-full flex items-center justify-center">
        {/* <div className="w-20 h-20 bg-page1 z-50 rounded-full shadow-[rgba(0,_0,_0,_0.6)_0px_30px_90px]"></div> */}
        <Link href={"profile"} className={profileLinkClassess}>
          {profileSVG}
        </Link>
        <Link href={`${props.goBackPath}`} className={goBackLinkClassess}>
          {goBackSVG}
        </Link>
      </div>
    </div>
  );
}

export default SideAction;
