const GITHUB_API="https://api.github.com/users/ntwalii?";
fetch(GITHUB_API)
.then(data=>
    data.json())
.then((data)=>console.log(data))