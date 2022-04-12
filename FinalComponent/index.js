const fetchNewJoke = () => {
    return new Promise((resolve, reject) => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then(data => {
          resolve(data.value)
        })
        .catch(err => {
          // Log the error in console for development debugging
          console.log(err)
          reject(err)

        })
    });
}