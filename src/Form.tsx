import React from "react";

//create a new component questionaire that will render a form with a button that will submit the form and save the data as app state

function Form() {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Age:
          <input type="text" name="age" />
        </label>
        <label>
          Favorite Food:
          <input type="text" name="food" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// function Form() {
//   return (
//     <div>
//       <form>
//         <input type="checkbox" name="checkbox" />
//         <label htmlFor="checkbox">Checkbox</label>
//         <input type="checkbox" name="checkbox" />
//         <label htmlFor="checkbox">Checkbox</label>
//         <input type="checkbox" name="checkbox" />
//         <label>
//           Name:
//           <input type="text" name="name" />
//         </label>
//         <label>
//           Age:
//           <input type="text" name="age" />
//         </label>
//         <label>
//           Favorite Food:
//           <input type="text" name="food" />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }


// function Form() {
//   return (
//     <div>
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" />
//         </label>
//         <label>
//           Age:
//           <input type="text" name="age" />
//         </label>
//         <label>
//           Email:
//           <input type="text" name="email" />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
 export default Form;