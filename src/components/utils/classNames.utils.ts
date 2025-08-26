const classNames = (...args: string[]) => {
  let joinClassNames = "";
  args.forEach((style) => {
    joinClassNames += `${style} `;
  });
  return joinClassNames;
};

export default classNames;
