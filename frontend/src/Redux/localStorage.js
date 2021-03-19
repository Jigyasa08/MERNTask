//function to load data from local storage
export const loadData = (key) => {
  try {
    let data = localStorage.getItem(key);
    console.log("load data called", key);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    return undefined;
  }
};

//function to save data to local storage
export const saveData = (key, data) => {
  console.log("save data called", key, data);
  localStorage.setItem(key, JSON.stringify(data));
};
