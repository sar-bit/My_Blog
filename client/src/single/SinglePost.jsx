import React from "react";
import "./singlepost.css";

export default function singlePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1625472603513-413fb94f8b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NjkxNTQ0Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Post Title
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Sarbita</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Webpack is a module bundler (manages and loads independent modules).
          It takes dependent modules and compiles them to a single (file)
          bundle. You can use this bundle while developing apps using command
          line or, by configuring it using webpack.config file. Babel is a
          JavaScript compiler and transpiler. It is used to convert one source
          code to other. Using this you will be able to use the new ES6 features
          in your code where, babel converts it into plain old ES5 which can be
          run on all browsers. Webpack is a module bundler (manages and loads
          independent modules). It takes dependent modules and compiles them to
          a single (file) bundle. You can use this bundle while developing apps
          using command line or, by configuring it using webpack.config file.
          Babel is a JavaScript compiler and transpiler. It is used to convert
          one source code to other. Using this you will be able to use the new
          ES6 features in your code where, babel converts it into plain old ES5
          which can be run on all browsers.
        </p>
      </div>
    </div>
  );
}
