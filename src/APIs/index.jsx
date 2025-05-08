export const CallAPI = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await responce.json();
  };
  
  export const CallUserAPI = async () => {
    const responce = await fetch('https://randomuser.me/api');
    return await responce.json();
  };
  