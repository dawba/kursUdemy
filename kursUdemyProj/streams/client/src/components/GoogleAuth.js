import React, { useEffect, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = () => {
  const auth = useRef(null); // {current: null}
  const status = useSelector((state) => state.auth.signedInStatus ?? false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: `${process.env.REACT_APP_USER_KEY}`,
          scope: "email",
          plugin_name: "streams",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      dispatch(signIn(auth.current.currentUser.get().getId()));
    } else dispatch(signOut());
  };

  return <div>{renderAuthStatus(status, auth)}</div>;
};

const renderAuthStatus = (signedInStatus, auth) => {
  if (signedInStatus === null) {
    return null;
  } else if (signedInStatus) {
    return (
      <div>
        <button
          className="ui red google button"
          onClick={() => auth.current.signOut()}
        >
          <i className="google icon" />
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        className="ui green google button"
        onClick={() => auth.current.signIn()}
      >
        <i className="google icon" />
        Sign In
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
