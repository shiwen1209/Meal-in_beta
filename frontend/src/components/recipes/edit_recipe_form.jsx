import React from "react";

class EditRecipeForm extends React.Component {
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
      image_url: '',
      instructions: [],
      newIngredient: '',
      newInstruction: '',
      
    }
    this.addIngredient = this.addIngredient.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addInstruction = this.addInstruction.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { processForm, closeModal} = this.props;
    processForm(this.state, this.props.recipeId).then(() => {
     
        closeModal();
      
    });
  }

  componentDidMount(){
    this.props.fetchRecipe(this.props.recipeId).then((res) => {
      let currentRecipe = res.data;
      this.setState({
        title: currentRecipe.title,
        category: currentRecipe.category,
        budget: currentRecipe.budget,
        description: currentRecipe.description,
        ingredients: currentRecipe.ingredients,
        prep_time: currentRecipe.prep_time,
        image_url: currentRecipe.image_url,
        instructions: currentRecipe.instructions
      })
    })
  }

  addIngredient(e)
  {
    e.preventDefault();
    // console.log("before", this.state.ingredients);
    
    // this.state.ingredients.push(this.state.newIngredient);
    // this.state.newIngredient = '';
    this.setState({ingredients: [...this.state.ingredients, this.state.newIngredient]}, ((res) => {
      // console.log("after", this.state.ingredients);
      this.setState({newIngredient: ''})
    }));

  }

  addInstruction(e)
  {
    e.preventDefault();
    // console.log("before", this.state.instructions);
    
    // this.state.ingredients.push(this.state.newIngredient);
    // this.state.newIngredient = '';
    this.setState({instructions: [...this.state.instructions, this.state.newInstruction]}, ((res) => {
      // console.log("after", this.state.instructions);
      this.setState({newInstruction: ''})
    }));

  }


  handleUpdate(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }
  render() {
    let instructionsList = this.state.instructions.map((instruction, idx) => <li key={idx}>{instruction}</li>)
    let ingredientsList = this.state.ingredients.map((ingred, idx) => <li key={idx}>{ingred}</li>)
    return(
      <div className="create-form-container">
        <div className="recipe-form-title">Update a Recipe</div>
          <form className="creating-form" >
            <div> 
            
              <div id="tester" className="how-to">
                <input id="title-input" className="title-box"type='text' placeholder="Please put a title"value={this.state.title} onChange={this.handleUpdate("title")} />
              </div>
            </div>
             
            <div>
              <div id="tester" className="how-to">
                <textarea id="description-input" value={this.state.description} placeholder="Please describe your dish in a couple words"onChange={this.handleUpdate('description')}/>
              </div>
            </div>
            <div>
            
              <div id="tester" className="selectors">
                {/* <input id="title-input" type='text' value={this.state.category} onChange={this.handleUpdate("category")} /> */}
               <div>
                <select name="category" className="category-drop">
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
                <div>
                <select placeholder="Category" name="budget" className="money-drop">
                  <option value="1">$</option>
                  <option value="2">$$</option>
                  <option value="3">$$$</option>
                  <option value="4">$$$$</option>
                </select>
                </div>
              </div>
            </div>
            <div>
                {/* <input id="title-input" type='number' value={this.state.budget} onChange={this.handleUpdate("budget")}/> */}
            </div>
            <div>
              <div id="tester" className="how-to">
                <input id="title-input" type='text' placeholder="How long will this take to make? EX: 55mins or 1hr 20mins"value={this.state.prep_time} onChange={this.handleUpdate('prep_time')}/>
              </div>
            </div>
                
                <div >
                  <div>
                  
                  </div>
                  <div className="list-add">
                    <div id="tester" className="how-to">
                    <input id="title-input-list" className="how-to" type="text" placeholder="Please add ingredients here!"value={this.state.newIngredient} onChange={this.handleUpdate('newIngredient')}/>
                    </div>
                    <div id="tester" className="how-to">
                    <input  id="title-input-list" type="text" value={this.state.newInstruction} placeholder="Please add instructions here!"onChange={this.handleUpdate('newInstruction')}/>
                    </div>
                  </div>
                  <div className="add-buttons">
                    <div id="tester" className="how-to ins">
                     <button  className="instruct-but" onClick={(e) => this.addIngredient(e)}>Add ingredient</button>
                    </div>
                    <div id="tester" className="how-to">
                      <button  className="instruct-but" onClick={(e) => this.addInstruction(e)}>Add instruction</button>
                    </div>

                  </div>
                  {/* /input here/  */} 
                </div>
                <div >
                  <div id="tester" className="how-to">
                  </div>
                  {/* /input here/  */} 
                  <ul div="ingredientsList" id="tester" className="how-to">
                    <div className="list-section">
                      <ul className="list-of-ingred">
                        {ingredientsList}
                      </ul>
                      <ul className="list-of-ingred2">
                        {instructionsList}
                      </ul>

                    </div>
                  </ul>
                </div >

          </form>
          
          <div id="recipe-form-buttons" className="how-to">
            {this.props.formType === "Update" ?
              <button onClick={(e) => {
                return this.props.deleteRecipe(this.props.recipeId)
                  .then(this.props.closeModal())
              }}
                className="submit-create-form" >Delete</button> :
              <div></div>
            }
                  <button className="submit-create-form"
                  onClick={this.handleSubmit }
                  
                  >Save</button>
          </div>

          
      </div>
  )
  }
}

export default EditRecipeForm;
