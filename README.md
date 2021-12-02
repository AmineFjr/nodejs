if you want to let others access your API,
First : install cors
Second : fetch('http://localhost:5500/posts')
          .then(res => res.json())
          .then(res => console.log(res))