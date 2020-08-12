export const genRandomString = (len = 5): string => {
  const text = "abcdefghijklmnopqrstuvwxyz0123456789";
  const rdmIndex = (text: string): number => (Math.random() * text.length) | 0;
  let rdmString = "";
  for (; rdmString.length < len; rdmString += text.charAt(rdmIndex(text)));
  return rdmString;
};
