import React from "react";
import dounut from "../../images/doughnut.png"

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      budget: null,
      description: '',
      ingredients: [],
      author: this.props.currentUserId,
      prep_time: '',
      image_url: donut,
      instructions: [],
      newIngredient: '',
      newInstruction: ''
    }
    this.addIngredient = this.addIngredient.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addInstruction = this.addInstruction.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { processForm, closeModal, errors } = this.props;
    processForm(this.state).then(() => {
      if (errors.length === 0) {
        closeModal();
      }
    });


  }

  // addIngredentList(){

  //   let ingredientsArray = [];

  //   while(true){
  //     // let input = prompt("add an ingredient");
  //     let input = <input type="text"/>;
  //     if( input === null){
  //       break;
  //     }
  //     ingredientsArray.push(input);
  //     console.log(ingredientsArray)
  //   }
  //   // return (
  //   //   <div> 
  //   //   {
  //   //     ingredientAarray.map((x) => <input>{x}</input>)
  //   //   }
  //   //   </div>
  //   // )
  // }
  

  addIngredient(e)
  {
    e.preventDefault();
    console.log("before", this.state.ingredients);
    
    // this.state.ingredients.push(this.state.newIngredient);
    // this.state.newIngredient = '';
    this.setState({ingredients: [...this.state.ingredients, this.state.newIngredient]}, ((res) => {
      console.log("after", this.state.ingredients);
      this.setState({newIngredient: ''})
    }));

  }

  addInstruction(e)
  {
    e.preventDefault();
    console.log("before", this.state.instructions);
    
    // this.state.ingredients.push(this.state.newIngredient);
    // this.state.newIngredient = '';
    this.setState({instructions: [...this.state.instructions, this.state.newInstruction]}, ((res) => {
      console.log("after", this.state.instructions);
      this.setState({newInstruction: ''})
    }));

  }


  handleUpdate(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }


  // budget: null,

  render() {
    // let cost = ['$', '$$', '$$$', '$$$$', '$$$$$']
    let instructionsList = this.state.instructions.map((instruction) => <li>{instruction}</li>)
    let ingredientsList = this.state.ingredients.map((ingred) => <li>{ingred}</li>)
    return(
        <div className="create-form-container">
          <div className="recipe-form-title">Create a Recipe</div>
            <form className="creating-form" onSubmit={this.handleSubmit}>
              <div> 
                <div id="tester" className="how-to-title">
                  Please put a title
                </div>
                <div id="tester" className="how-to">
                  <input id="title-input" className="title-box"type='text' value={this.state.title} onChange={this.handleUpdate("title")} />
                </div>
              </div>
                <div id="tester" className="how-to-title">
                  Please describe your dish
                </div>
              <div>
                <div id="tester" className="how-to">
                  <input id="description-input" type='text' value={this.state.description} onChange={this.handleUpdate('description')}/>
                </div>
              </div>
              <div>
                <div id="tester" className="how-to-title">
                  Please select a category
                </div>
                <div id="tester" className="how-to">
                  {/* <input id="title-input" type='text' value={this.state.category} onChange={this.handleUpdate("category")} /> */}
                  <select name="category" className="money-drop">
                    <option value="appetizers-and-snacks">Appetizers/Snacks</option>
                    <option value="breakfast-and-brunch">Breakfast</option>
                    <option value="desserts">Desserts</option>
                    <option value="drinks">Drinks</option>
                    <option value="main-dish">Main Dish</option>
                    <option value="meat-and-poultry">Meat and Poultry</option>
                    <option value="salad">Salad</option>
                    <option value="world-cuisine">World Cuisine</option>
                  </select>
                </div>
              </div>
              <div>
                <div id="tester" className="how-to-title">
                  How costly is this meal?
                </div>
                  {/* <input id="title-input" type='number' value={this.state.budget} onChange={this.handleUpdate("budget")}/> */}
                  <select name="budget" className="money-drop">
                    <option value="1">$</option>
                    <option value="2">$$</option>
                    <option value="3">$$$</option>
                    <option value="4">$$$$</option>
                  </select>
              </div>
              <div>
                <div id="tester" className="how-to-title">
                  How long will this take to make?
                </div>
                <div id="tester" className="how-to">
                  <input id="title-input" type='text' value={this.state.prep_time} onChange={this.handleUpdate('prep_time')}/>
                </div>
              </div>
                  
                  <div >
                    <div>
                    <ul div="ingredientsList" id="tester" className="how-to">
                      {ingredientsList}
                    </ul>
                    </div>
                    <div id="tester" className="how-to">
                    <input id="tester" className="how-to" type="text" value={this.state.newIngredient} onChange={this.handleUpdate('newIngredient')}/>
                    </div>
                    <div id="tester" className="how-to">
                    <button onClick={(e) => this.addIngredient(e)}>add ingred</button>
                    </div>
                    {/* /input here/  */} 
                  </div>

                  <div >
                    <div id="tester" className="how-to">
                    <ul>
                      {instructionsList}
                    </ul>
                    </div>
                    <div id="tester" className="how-to">
                    <input  type="text" value={this.state.newInstruction} onChange={this.handleUpdate('newInstruction')}/>
                    </div>
                    <div id="tester" className="how-to">
                    <button onClick={(e) => this.addInstruction(e)}>add instruct</button>
                    </div>
                    {/* /input here/  */} 
                  </div >
                  <div id="tester" className="how-to">
                  <button  className="submit-create-form">Save</button>
                  </div>

            </form>

            
        </div>
    )
  }
}

export default RecipeForm;
