import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import devfinder from "../assets/images/devfinder.svg";
import light_devfinder from "../assets/images/light-devfinder.svg";
import sun from "../assets/images/sun.svg";
import moon from "../assets/images/moon.svg";
import search_icon from "../assets/images/search-icon.svg";
import light_pinpoint from "../assets/images/light-pinpoint.svg";
import light_link from "../assets/images/light-link.svg";
import light_twitter from "../assets/images/light-twitter.svg";
import light_company from "../assets/images/light-company.svg";
import pinpoint from "../assets/images/pinpoint.svg";
import link from "../assets/images/link.svg";
import twitter from "../assets/images/twitter.svg";
import company from "../assets/images/company.svg";

import { log } from "console";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [user, setUser] = useState("");
  const [userTag, setUserTag] = useState("octocat");
  const [name, setName] = useState("The Octocat");
  const [joined, setJoined] = useState("25 Jan 2011");
  const [followers, setFollowers] = useState("3988");
  const [following, setFollowing] = useState("10");
  const [repos, setRepos] = useState("8");
  const [avatar, setAvatar] = useState(
    "https://avatars.githubusercontent.com/u/583231?v=4"
  );
  const [bio, setBio] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus velit odio nulla perspiciatis consequuntur omnis."
  );
  const [location, setLocation] = useState("San Francisco");
  const [twitterUsername, setTwitterUsername] = useState("Not available");
  const [companyName, setCompanyName] = useState("@github");
  const [blog, setBlog] = useState("Not available");
  const [responseStatus, setResponseStatus] = useState(200);

  const searchUser = () => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.message === "Not Found") {
          setResponseStatus(res.status);
        } else {
          setName(res.name);
          setUserTag(res.login);
          setJoined(res.created_at);
          setFollowers(res.followers);
          setFollowing(res.following);
          setRepos(res.public_repos);
          setAvatar(res.avatar_url);
          setBio(res.bio);
          setLocation(res.location);
          setTwitterUsername(res.twitter_username);
          setCompanyName(res.company);
          setBlog(res.blog);
          setResponseStatus(200);
        }
      })
      .catch((error) => error.message);
  };

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-ghostWhite dark:bg-darkBlue">
      <div className="max-w-[45.625rem] mx-auto px-5 pt-8">
        {/*NAVBAR*/}
        <div className=" flex justify-between">
          <div>
            <Image
              src={theme === "dark" ? devfinder : light_devfinder}
              alt="/"
            />
          </div>

          <div className="flex items-center">
            <p className="uppercase font-bold mr-6">
              {theme === "dark" ? "light" : "dark"}
            </p>
            <div className="cursor-pointer" onClick={handleTheme}>
              <Image src={theme === "dark" ? sun : moon} alt="/" />
            </div>
          </div>
        </div>
        {/*SEARCHBAR*/}
        <div
          className="mt-6 h-16 rounded-2xl bg-white dark:bg-darkTealishBlue flex 
        items-center px-2 shadow-md relative "
        >
          <div className="w-fit mr-2">
            <Image src={search_icon} alt="/" />
          </div>
          <span
            className={
              responseStatus === 200
                ? "hidden"
                : "text-red-500 absolute right-24 font-bold bg-white dark:bg-darkTealishBlue"
            }
          >
            No results
          </span>

          <input
            className="grow h-12 placeholder:font-bold bg-transparent outline-none border-0 
            mr-2 placeholder:text-sm md:placeholder:text-base text-sm md:text-base"
            type="text"
            placeholder="Search GitHub username..."
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />

          <div
            className=" w-[5.25rem] text-white h-12 bg-primaryBlue rounded-lg cursor-pointer"
            onClick={searchUser}
          >
            <p className="font-bold text-center py-2">Search</p>
          </div>
        </div>
        {/*MAIN BODY*/}
        <div className="bg-white dark:bg-darkTealishBlue rounded-2xl mt-4 pt-12 pb-4 px-6">
          <div className=" flex">
            <div className="w-[4.375rem] h-[4.375rem] md:w-[7.3125rem] md:h-[7.3125rem] rounded-[50%]  mr-6">
              <img className=" w-full rounded-[50%]" src={avatar} alt="" />
            </div>
            <div>
              <p className="text-base text-left font-bold text-tealishBlue dark:text-ghostWhite">
                {name}
              </p>
              <p className="text-[0.8125rem] text-primaryBlue">@{userTag}</p>
              <p className="text-[0.8125rem] text-lightGray dark:text-ghostWhite">
                Joined {joined}
              </p>
            </div>
          </div>
          <div className="px-2">
            <p className="text-[0.8125rem] mt-4 text-tealishBlue dark:text-ghostWhite">
              {bio === null ? "No bio" : bio}
            </p>
          </div>

          <div className="px-6 py-4 bg-ghostWhite dark:bg-darkBlue rounded-[0.7rem] mt-4 shadow-sm ">
            <div className="flex justify-between max-w-[25rem] mx-auto">
              <div>
                <p className="text-[0.6875rem] md:text-[0.8125rem]">Repos</p>
                <p className="font-bold text-center md:text-2xl">{repos}</p>
              </div>

              <div>
                <p className="text-[0.6875rem] md:text-[0.8125rem]">
                  Followers
                </p>
                <p className="font-bold text-center md:text-2xl">{followers}</p>
              </div>

              <div>
                <p className="text-[0.6875rem] md:text-[0.8125rem]">
                  Following
                </p>
                <p className="font-bold text-center md:text-2xl">{following}</p>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-1 grid-rows-4 gap-y-3 md:max-h-[6rem] md:grid-cols-2 md:grod-rows-2 mt-4 
           md:gap-x-5 md:gap-y-12 py-5"
          >
            <div className="flex items-center">
              <div className="w-6 mr-4">
                <Image
                  src={theme === "dark" ? light_pinpoint : pinpoint}
                  alt="/"
                />
              </div>
              <p
                className={
                  location === null
                    ? `text-lightGray`
                    : `text-tealishBlue dark:text-ghostWhite text-[0.8125rem] md:text-base`
                }
              >
                {location}
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-6 mr-4">
                <Image src={theme === "dark" ? light_link : link} alt="/" />
              </div>
              <p
                className={
                  blog === ""
                    ? `text-lightGray`
                    : `text-tealishBlue dark:text-ghostWhite text-[0.8125rem] md:text-base`
                }
              >
                {blog === "" ? "Not available" : blog}
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-6 mr-4">
                <Image
                  src={theme === "dark" ? light_twitter : twitter}
                  alt="/"
                />
              </div>
              <p
                className={
                  twitterUsername === null
                    ? `text-lightGray`
                    : `text-tealishBlue dark:text-ghostWhite text-[0.8125rem] md:text-base`
                }
              >
                {twitterUsername === null ? "Not available" : twitterUsername}
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-6 mr-4">
                <Image
                  src={theme === "dark" ? light_company : company}
                  alt="/"
                />
              </div>
              <p
                className={
                  companyName === null
                    ? `text-lightGray`
                    : `text-tealishBlue dark:text-ghostWhite text-[0.8125rem] md:text-base`
                }
              >
                {companyName === null ? "Not available" : companyName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
