import React from "react"
import Card from "./components/Card";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import foods from "./foods"




class  App extends React.Component {
  
  state = {
    foods: foods,
    searchfield: ""
  } 
  

  onSearchChange = (e) => {
    this.setState({
      searchfield: e.target.value,
    })
  }
  
  render() {
    const filteredFoods = this.state.foods.filter((food) => {
      return food.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div>
       <Header />
       <div className="container">
        <SearchBox searchChanged = {this.onSearchChange} />
         <Card foods = {filteredFoods} />
       </div>
      </div>
     )
  }
  
}
export default App;