const style = `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Josefin+Sans:wght@600&family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Josefin+Sans:wght@600&family=Lobster&family=Old+Standard+TT&display=swap');

* {
    padding: 0;
    margin: 0;
    font-family: 'Old Standard TT', serif;
}

h1,h2,h3,h4,h5,h6,p,a,b {
    background-color: transparent;
    text-align: center;
    margin: 0;
    padding: 0;
}

header {
    background-color: #9d8189;
    color: black;
    height: 12vh;
}

header h2 {
    font-style: oblique;
    text-shadow: 5px 1.5px #f6bd60;
}

main {
    background-color: #ffe5d9;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

footer {
    background-color: #9d8189;
    color: black;
    height: 8vh;
    padding-top: 20px;
}

#content_container {
    display: flex;
    height: 80%;
    width: 90%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: space-evenly;
}

.content {
    width: 30%;
    text-align: center;
    height: 200px; 
    border: 5px solid #f6bd60;
    margin-bottom: 20px;
    background-color: #fec89a;
}

h2 {
    font-family: 'Bebas Neue', cursive;
    font-size: 42px;
}

h3 {
    font-size: 20px;
    font-style: oblique;
}

.content_head {
    padding-top: 10px;
    height: 88px;
    background-color: #f6bd60;
    margin-bottom: 18px;
}

`

module.exports = style