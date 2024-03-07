import React from "react";
import { useRef } from "react";
import { Octokit } from "octokit";

const GITHUB_AUTHENTICATION_TOKEN = process.env.GITHUB_AUTHENTICATION_TOKEN;

async function getAuthenticatedUser() {
  const octokit = new Octokit({ auth: GITHUB_AUTHENTICATION_TOKEN });
  const { status, data } = await octokit.rest.users.getAuthenticated();
  if (status === 200) {
    console.log("Successfully Authenticated");
  }
  return octokit;
}

async function getUserData(ocotkit, userName) {
  try {
    const retData = await ocotkit.request("GET /users/{username}", {
      username: userName,
    });
    console.log(retData);
    return retData;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export default function Search({ userStatusResponse }) {
  const inputRef = useRef(null);

  //!Steps, user exists,

  async function onSubmitFnx(event) {
    event.preventDefault();
    const username = inputRef.current.value.trim();
    if (!username) {
      console.error("Please enter user name");
      return;
    }

    //!What should I be showing as response to the user, get the list of repositories

    const octokit = await getAuthenticatedUser();
    const userData = await getUserData(octokit, username);
    if (userData.status === 200) {
      userStatusResponse(true);
    }
  }

  // function onSubmitting(event) {
  //   console.log("print bc");
  //   event.preventDefault(); // prevent form submission and page reload
  //   const inputValueByUser = inputRef.current.value.trim();
  //   console.log(`Searching for the user: ${inputValueByUser}`);

  //   //!Authenticate
  //   getAuthenticatedUser();

  //   // Authenticate
  //   // const userData = getUserData(octokitAuth, inputValueByUser);

  //   //!Here we need to call the github apis to check if the user exists or not
  // }

  return (
    <form onSubmit={onSubmitFnx}>
      <label>User Name: </label>
      <input type="text" ref={inputRef}></input>
      <button type="submit">Search</button>
    </form>
  );
}

//! It is an interesting finding the it I call onSubmit = {() => onSubmitFxn()}, it is executed on rendering.
//  Read more about it.
