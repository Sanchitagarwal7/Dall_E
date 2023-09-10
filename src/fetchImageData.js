
async function fetchImageArr(prompt){
    const apiUrl = 'https://api.openai.com/v1/images/generations';
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

    const requestBody = {
        prompt,
        n:4,
        size:"256x256"
    }

    const response = await fetch(apiUrl, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${apiKey}`
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(requestBody), // body data type must match "Content-Type" header
      });

      const data = await response.json();

      return data.data;
}

export default fetchImageArr;