export function doFakeLogin(username: string, password: string) {
  if (username === "admin" && password === "admin") {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ token: "fake-token" });
      }, 1000);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Invalid username or password");
      }, 1000);
    });
  }
}
