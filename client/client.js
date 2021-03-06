// imports for react

import './style.css';
import Flipcard from '@kennethormandy/react-flipcard';
import '@kennethormandy/react-flipcard/dist/Flipcard.css'

// constant color value to hold the colors of the columns
const colors = ["#1B998B", "#32021F", "#08415C", "#95190C", "#E3B505"];

// component that creates the column name form
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  // event handler for the submit event
  handleSubmit(event) {
    this.props.arr(event, document.querySelector(`#${this.props.name}`).value);
    this.handleCancel(event);
  }

  // event handler for after the submit or cancel so the module goes away
  handleCancel(event) {
    this.props.clicked();
    const overlay = document.getElementsByClassName("overlay")[0];
    overlay.style.visibility = "hidden";
    event.preventDefault();
  }

  // render the category name form component and set the form values
  render() {
    return (
      <form id="categoryForm" action="/addColumn" method="post">
        <label for={this.props.name}>{this.props.name}</label>
        <input type="text" id={this.props.name} name={this.props.name} placeholder={this.props.placeholder} />
        <input type="submit" value="Submit" onClick={this.handleSubmit}></input>
        <input type="submit" value="Cancel" onClick={this.handleCancel} style={{ backgroundColor: "red" }}></input>
      </form>
    )
  }
}

// component that creates the expense form
class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  // handles the submission of the event
  handleSubmit(event) {
    let data = [];
    data.push(document.querySelector("#Item").value);
    data.push(document.querySelector("#Amount").value);
    data.push(document.querySelector("#Date").value);
    data.push(document.querySelector("#Notes").value);
    this.props.arr(event, data);
    this.handleCancel(event);
  }

  // handles making the module go away
  handleCancel(event) {
    this.props.clicked();
    const overlay = document.getElementsByClassName("overlay")[0];
    overlay.style.visibility = "hidden";
    event.preventDefault();
  }

  // render the form using HTML, creating the post request
  render() {
    return (
      <form id="categoryForm" action="/addExpense" method="post">
        {/* item name */}
        <label for="Item">Item</label>
        <input type="text" id="Item" name="Item" placeholder="eg. Taco Bell" />
        {/* amount */}
        <label for="Amount">Price</label>
        <input type="text" id="Amount" name="Amount" placeholder="eg. 14.50" />
        {/* date */}
        <label for="Date">Date</label>
        <input type="date" style={{ fontSize: "1.5em" }} id="Date" name="Date"  />
        {/* notes */}
        <label for="Notes">Notes</label>
        <input type="text" id="Notes" name="Notes" placeholder="eg. paid for Peter, got quesadillas" />

        {/* submit / cancel buttons */}
        <input type="submit" value="Submit" onClick={this.handleSubmit}></input>
        <input type="submit" value="Cancel" onClick={this.handleCancel} style={{ backgroundColor: "red" }}></input>
      </form>
    )
  }
}

// component that creates the grey column button
class ColumnButton extends React.Component {
  constructor(props) {
    super(props);
    this.addColumn = this.addColumn.bind(this);

    // sets state values to check if the column has been clicked and what the status code is
    this.state = {
      clicked: false,
      statusCode: this.props.statusCode
    };
  }

  // sets the status code and clicked value, which causes a re-render
  addColumn() {
    this.setState(state => ({
      clicked: !state.clicked,
      statusCode: this.props.statusCode 
    }));
  }

  // render the column itself and will cause the category name form to pop up if clicked
  render() {
    return (
      <div id="columnButton">
        <div style={{ backgroundColor: "grey" }} >
          <h1 style={{ visibility: "hidden" }}>text</h1>
          <button id="newColumn" onClick={this.addColumn}>+</button>
        </div>
        {
          this.state.clicked ?
            <div className="overlay" style={{ visibility: "visible" }}>
              <div className="module">
                <NameForm name={"Category"} placeholderExpense={"eg. Food"} arr={this.props.arr} clicked={this.addColumn} statusCode={this.state.statusCode} />
              </div>
            </div>
            : null
        }
      </div>
    )
  }
}

// creates an expense item card
class ExpenseItem extends React.Component {
  constructor() {
    super()

    // sets the original state to front side of card
    this.state = {
      flipped: false,
    }
  }

  // renders the card component using the flipcard library, this displays the card
  render() {
    return (
      <Flipcard flipped={this.state.flipped} type="horizontal" onClick={e => this.setState({ flipped: !this.state.flipped })}>
        <div className="Card">
          <div className="date">
            <div className="title">
              {this.props.data[0]}
            </div>
          </div>
          <div className="number">
            {this.props.data[1]}
          </div>
          
        </div>
        <div className="Card" >
          <div className="date">
            {this.props.data[2]}
          </div>
          <div className="note">
            {this.props.data[3]}
          </div>
        </div>
      </Flipcard>
    )
  }
}

// list of each of the expense cards and will re-initialize if the page is reloaded
class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      statusCode: this.props.statusCode
    };
    this.createNodes = this.createNodes.bind(this);
    this.expenseNodes = [];

    // check for any previous data if the page has been reloaded
    this.prev = this.props.previousDataCards;
    if (this.prev != undefined && this.prev.length > 0) {
      for (var i = 0; i < this.prev.length; i++) {
        const obj = this.prev[i];
        var result = Object.keys(obj).map(function(key) {
          return obj[key];
        });
        const expenseNode = <ExpenseItem data={result} />;
        this.expenseNodes.push(expenseNode);
      }
    }
  }

  // will rerender the component if the future data is different from the current data
  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.data != this.props.data);
  }

  // creates the expense nodes objects and returns status codes
  // this will not check for repeating values because you can have multiple expenses
  createNodes() {
    switch (this.props.statusCode) {
      case 201:
        console.dir(`${this.props.statusCode}: Created expense!`)
        console.dir(this.props.data);
        const expenseNode = <ExpenseItem data={this.props.data} />;
        this.expenseNodes.push(expenseNode);
        return this.expenseNodes;
      case 400:
        return;
      default:
        return this.expenseNodes;
    }
  }

  // renders the cards
  render() {
    return <div id="node-cards">{this.createNodes()}</div>
  }
}

// component that holds each individual category column 
class ExpenseCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      data: [],
      statusCode: ''
    }
    this.addExpenseItem = this.addExpenseItem.bind(this);
    this.postNewExpense = this.postNewExpense.bind(this);
  }

  addExpenseItem() {
    this.setState(state => ({
      clicked: !state.clicked
    }));
  }

  // handles the post for when a new expense item is created
  postNewExpense(event, val) {
    const form1 = document.querySelector("#categoryForm");
    const method = form1.getAttribute('method');
    const action = form1.getAttribute('action');

    console.log(method + " " + action);

    const xhr = new XMLHttpRequest();
    xhr.open(method, action);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Accept', 'application/json');

    // handles the post and pushes the data of the expense array so that the expense cards can contain these values
    xhr.onload = () => {
      this.state.data = [];
      let obj = "";
      if (xhr.response != '') {
        obj = JSON.parse(xhr.response);
      }
      for (var i = 0; i < val.length; i++) {
        this.state.data.push(val[i]);
      }
      if(xhr.status === 400){
        alert("Please enter required items: " + obj.message);
        console.log(obj);
      }
      
      this.setState({ data: this.state.data, statusCode: xhr.status })
    };

    xhr.send(`item=${val[0]}&amount=${val[1]}&date=${val[2]}&notes=${val[3]}`);

    event.preventDefault();
    return false;

  }

  // renders each column and the list of expenses associated with them
  // also checks if the button is clicked to pull up the expense form module
  render() {
    return (
      <div id="columnData">
        <div id="category" style={{ backgroundColor: colors[this.props.color], borderTop: `10px solid ${colors[this.props.color]}` }} >
          <h1>{this.props.categoryName}</h1>
          <ExpenseList category={this.props.categoryName} data={this.state.data} statusCode={this.state.statusCode} previousDataCards={this.props.previousDataCards} />
          <div id="bottom">
            <button id="add" onClick={this.addExpenseItem}>+</button>
          </div>

        </div>
        {
          this.state.clicked ?
            <div className="overlay" style={{ visibility: "visible" }}>
              <div className="module">
                <ExpenseForm clicked={this.addExpenseItem} arr={this.postNewExpense} />
              </div>
            </div>
            : null
        }
      </div>
    )
  }
}

// component that holds the list of columns on the page, it will create a new column if the column button is clicked
class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.listprop,
      statusCode: this.props.statusCode
    };
    this.createNodes = this.createNodes.bind(this);
    this.display = "none";
    this.colorArray = [];
    this.expenseNodes = [];
    
    // this creates the previous column data so that the columns can persist after each page reload
    if (this.state.data != undefined && this.state.data.length > 0) {
      for (var i = 0; i < this.state.data.length; i++) {
        this.colorArray.push(Math.floor(Math.random() * 5));
        const expenseNode = <ExpenseCategory color={this.colorArray[i]} categoryName={this.state.data[i]} previousDataCards={this.props.previousDataCards} />;
        this.expenseNodes.push(expenseNode);
      }
      this.display = "inline-block"
    }
  }

  // creates each column node in the list of columns
  // this will check for repeating values
  createNodes() {
    this.display = "inline-block";
    switch (this.props.statusCode) {
      case 204:
        alert("Category already exists!");
        console.dir(`${this.props.statusCode}: Already exists!`);
        return this.expenseNodes;
      case 201:
        console.dir(`${this.props.statusCode}: Created!`)
        const data = this.state.data;
        this.colorArray.push(Math.floor(Math.random() * 5));
        const expenseNode = <ExpenseCategory color={this.colorArray[data.length - 1]} categoryName={data[data.length - 1]} />;
        this.expenseNodes.push(expenseNode);
        return this.expenseNodes;
      default:
        return this.expenseNodes;
    }
  }

  // render the list of columns that exist on the page
  render() {
    return <div id="nodes" style={{ display: `${this.display}` }}>{this.createNodes()}</div>;
  }
}

// component that holds all of the page content
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      statusCode: ''
    };

    this.postNewColumn = this.postNewColumn.bind(this);
    this.resetColumns = this.resetColumns.bind(this);

    this.resetColumns();
  }

  // post request for each column 
  postNewColumn(event, val) {
    const form1 = document.querySelector("#categoryForm");
    const method = form1.getAttribute('method');
    const action = form1.getAttribute('action');

    console.log(method + " "+action);

    const xhr = new XMLHttpRequest();
    xhr.open(method, action);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onload = () => {
      let obj = "";
      if (xhr.response != '') {
        obj = JSON.parse(xhr.response);
      }
      if (xhr.status === 201) {
        this.state.data.push(val)
      }
      if(xhr.status === 400){
        alert(obj.message);
        console.dir(obj.message);
      }
      this.setState({ data: this.state.data, statusCode: xhr.status })
    };

    xhr.send(`name=${val}`);

    event.preventDefault();
    return false;

  }

  // checks for previous column data 
  resetColumns() {
    if (this.props.previousDataColumns != undefined && this.props.previousDataColumns.length > 0) {
      for (var i = 0; i < this.props.previousDataColumns.length; i++) {
        this.state.data.push(this.props.previousDataColumns[i].name);
      }
      this.setState({ data: this.state.data, statusCode: this.props.statusCode });
    }
  }

  // renders the page with the column list and the button that creates new columns
  render() {
    return (
      <div id="main">
        <ColumnButton color={Math.floor(Math.random() * 5)} categoryName={"Other"} arr={this.postNewColumn} statusCode={this.state.statusCode} />
        <CategoryList listprop={this.state.data} statusCode={this.state.statusCode} previousDataCards={this.props.previousDataCards} />
      </div>
    )
  }
}

// initializes the page and checks if there is previous data that exists
const init = () => {
  let initilize = true;
  const method = `/getPage?init=${initilize}`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", method);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onload = () => {
    const obj = JSON.parse(xhr.response);
    var arrayColumns = [];
    if (Object.keys(obj.columns).length > 0) {
      arrayColumns = Object.keys(obj.columns).map(function (key) {
        return obj.columns[key];
      });
    }
    console.dir("GET " + method);
    switch (xhr.status) {
      case 200:
        console.dir(xhr.status + " OK")
    }
    ReactDOM.render(
      <Page previousDataColumns={arrayColumns} previousDataCards={obj.cards} statusCode={xhr.status} />,
      document.getElementById('app')
    );
  }

  xhr.send();
}

// checks to see if the page is about to be reloaded
const close = () => {
  let initialize=false;
  const method = `/getPage?init=${initialize}`;
  const xhr = new XMLHttpRequest();
  xhr.open("HEAD", method);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onload = () => {
    
    console.dir("HEAD " + method);
    switch (xhr.status) {
      case 200:
        console.dir(xhr.status + " OK")
    }
  }

  xhr.send();
}

window.onload = init;
window.onbeforeunload = close;