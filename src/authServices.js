export function yourAuthenticationCheckHere(user, routeName) {
  // Check if the user is authenticated based on your criteria
  if (user && user.token) {
    // If you have a token in the user data, consider the user authenticated
    return true;
  }

  // Allow unrestricted access to the login route
  if (routeName === 'login') {
    return true;
  }

  // If not authenticated and not on the login route, return false
  return false;
}