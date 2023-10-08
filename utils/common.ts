export const ScrollToIdFunction = (id: string, smooth?: boolean) => {
  var element = document.getElementById(id);
  if (element)
    element.scrollIntoView({ behavior: smooth ? "smooth" : "instant" });
};

export const githubURL = "https://github.com/ayush137";
export const linkedinURL =
  "https://www.linkedin.com/in/ayush-bhadouriya-279021185";
export const email = "mailto:bhadouriaayush@gmail.com";
