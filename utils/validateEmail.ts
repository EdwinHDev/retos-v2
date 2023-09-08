
export function validateEmail(email: string) {
  let RegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(RegEx)) {
    return true;
  } else {
    return false;
  }
}