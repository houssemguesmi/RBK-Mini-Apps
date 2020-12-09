class App extends React.Component {
  constructor(props) {
    super(props);
  }
  firstForm() {
    ReactDOM.render(
      <Form
        details={["Name", "Password", "E-Mail"]}
        option={this.secondForm.bind(this)}
        value="Next"
      />,
      document.getElementById("app")
    );
  }
  secondForm() {
    ReactDOM.render(<Waiting />, document.getElementById("app"));
    setTimeout(() => {
      ReactDOM.render(
        <Form
          details={[
            "Line1",
            "Line2",
            "City",
            "State",
            "Zip-Code",
            "Phone-Number",
          ]}
          option={this.lastForm.bind(this)}
          value="Next"
        />,
        document.getElementById("app")
      );
    }, 1);
  }
  checkout() {
    ReactDOM.render(<Purchase />, document.getElementById("app"));
  }
  lastForm() {
    ReactDOM.render(<Waiting />, document.getElementById("app"));
    setTimeout(() => {
      ReactDOM.render(
        <Form
          details={[
            "CreditCard-Number",
            "Expiry Date",
            "CVC",
            "BillingZip-Code",
          ]}
          option={this.checkout.bind(this)}
          value="Checkout"
        />,
        document.getElementById("app")
      );
    });
  }

  render() {
    return <Button option={this.firstForm.bind(this)} value="Start Form" />;
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        {this.props.details.map((detail, index) => {
          return <Item item={detail} key={index} />;
        })}
        <Button option={this.props.option} value={this.props.value} />
      </form>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  typing(e) {
    let value = e.target.value;
    let item = this.props.item;
    this.state[item] = value;
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <label className="labels">{`${this.props.item}: `}</label>
        <input
          type="text"
          className="inputs"
          id={this.props.item}
          onBlur={this.typing.bind(this)}
          placeholder={this.props.item}
        ></input>
      </div>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        value={this.props.value}
        type="button"
        id="Next"
        onClick={this.props.option}
      ></input>
    );
  }
}

class Purchase extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p id="result">Purchase Done</p>
      </div>
    );
  }
}

class Waiting extends React.Component {
  constructor(props) {
    super(props);
    console.log("waiting");
  }
  render() {
    return (
      <div>
        <p id="result">Wait Please!</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
