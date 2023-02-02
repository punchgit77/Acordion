

export const getData=async()=>{
    const results = await fetch("https://jsonplaceholder.typicode.com/users/")
    const res = await results.json();
    // setData(res);
    return res;
  }
