import { Component } from "react";
class Operations extends Component {
  render() {
    return (
      <div className="Operation">
        <input
          id="amount"
          type="text"
          placeholder="Amount"
          value={this.props.tempTransaction.amount}
          onChange={(event) => {
            this.props.userInputBining(event);
          }}
        ></input>
        <input
          id="vendor"
          type="text"
          placeholder="Vendor"
          value={this.props.tempTransaction.vendor}
          onChange={(event) => {
            this.props.userInputBining(event);
          }}
        ></input>
        <input
          id="category"
          type="text"
          placeholder="Category"
          value={this.props.tempTransaction.category}
          onChange={(event) => {
            this.props.userInputBining(event);
          }}
        ></input>
        <div className="OperationButtoms">
          <button onClick={this.props.Deposit}>Deposit</button>{" "}
          <button onClick={this.props.Withdraw}>Withdraw</button>
        </div>
      </div>
    );
  }
}
export default Operations;
