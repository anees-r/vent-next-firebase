const FriendlyFirebaseError = (error) => {
  console.log("errorcode:", error.code)
  switch (error.code) {
    case "auth/email-already-in-use":
      return "This email is already registered.";
    case "auth/invalid-email":
      return "Invalid email format.";
    case "auth/weak-password":
      return "Password should be at least 6 characters.";
    case "auth/invalid-credential":
      return "Invalid credentials.";
    case "auth/wrong-password":
    default:
      return "Something went wrong. Please try again.";
  }
};

export default FriendlyFirebaseError;
