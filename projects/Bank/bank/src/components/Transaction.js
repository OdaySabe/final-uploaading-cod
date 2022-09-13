import { Component } from "react";
class Transaction extends Component {
  delete = () => {
    this.props.deleteTransaction(this.props.index);
  };
  checkPositiveOrNegative = (amount) => {
    if (amount > 0) {
      return "positive";
    } else {
      return "negative";
    }
  };
  render() {
    return (
      <div
        className={
          "singleTransactions " +
          this.checkPositiveOrNegative(this.props.singletTransaction.amount)
        }
      >
        <h3>Category: </h3> <p>{this.props.singletTransaction.category}</p>
        <h3>vendor: </h3>
        <p>{this.props.singletTransaction.vendor}</p>
        <h3>amount: </h3>
        <p>{this.props.singletTransaction.amount} </p>
        <button className="buttom" onClick={this.delete}>
          Delete Transaction
        </button>
      </div>
    );
  }
}
export default Transaction;
