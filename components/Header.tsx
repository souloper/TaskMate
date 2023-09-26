"use client";

import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";
import { useEffect, useState } from "react";
import fetchSuggestion from "@/lib/fetchSuggestion";
import { useAuth, useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  
  // const { userId, getToken, isLoaded, isSignedIn } = useAuth();
  const { isSignedIn, user, isLoaded } = useUser();
  // console.log(user?.imageUrl);

  const handleOptions=() => {
    return(
      <div className="z-20">
      <UserButton />
      </div>
      );
  }

  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);

  const [loading, setLoading] = useState<boolean>(false);
  const [suggestion, setSuggestion] = useState<string>("");

  useEffect(() => {
    if (board.columns.size === 0) return;
    setLoading(true);

    const fetchSuggestionFunc = async () => {
      const suggestion = await fetchSuggestion(board);
      setSuggestion(suggestion);
      setLoading(false);
    };

    fetchSuggestionFunc();
  }, [board]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-green-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50" />
      {/* <Link href="/"> */}
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
      {/* </Link> */}

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* searchbox */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="submit" hidden></button>
          </form>

          {/* avatar */}
          {isSignedIn && isLoaded ? 
            <UserButton appearance={{elements:{avatarBox: "w-14 h-14"}}} afterSignOutUrl="/sign-in" userProfileMode="modal" />
            : 
            <Avatar name={`${user?.fullName}`} src={`${user.imageUrl}`} size="50" round={true} />
            // <Avatar name={`${user?.fullName}`} src={`${user?.imageUrl}`} size="50" round={true} />
          }
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center text-sm font-light p-2 pr-5 shadow-xl rounded-3xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon
            className={`inline-block h-10 w-10 text-[#0055D1] mr-1 ${
              loading && "animate-spin"
            }`}
          />
          {suggestion && !loading
            ? suggestion
            : `Hello ${user?.firstName}, Welcome to TaskMate the whole new generation app to keep a track of your TODO. Maxes your productivity!
            Hope you will enjoy this Application. Have a Wonderfull Day!`}
        </p>
      </div>
    </header>
  );
}

export default Header;
