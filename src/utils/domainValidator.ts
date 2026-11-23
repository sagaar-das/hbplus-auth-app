
const ALLOWED_DOMAIN = "hbplus.fit";

export const isAllowedDomain = (
  email: string
): boolean => {

  const normalizedEmail = email
    .trim()
    .toLowerCase();

  const emailParts = normalizedEmail.split("@");

  if (emailParts.length !== 2) {
    return false;
  }

  return (
    emailParts[0].length > 0 &&
    emailParts[1] === ALLOWED_DOMAIN
  );
};
