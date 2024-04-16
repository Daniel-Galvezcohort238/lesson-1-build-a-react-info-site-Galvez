import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

//1 
const variable = (
  <div>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
    <p>paragraph 3</p>
  </div>
)

//2
document.getElementById('root').append(variable);

//3
//My Guess: appending would work the same as createRoot and rendering it

//4 
//My Guess: I cant really explain it, its not even looking at what the object contains only that it is an object
//answer: The reason it doesn't work the same as createRoot and rendering it is because it merely creates an object, of the Object class,
// not the node class which is what elements are. The DOM only understands to append node objects like we expect, but give it another object and it appends its value