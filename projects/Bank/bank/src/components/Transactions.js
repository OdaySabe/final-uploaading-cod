import { Component } from "react";
import Transaction from "./Transaction";
class Transactions extends Component {
  componentWillUnmount = () => {
    if (this.props.makeBackButtom) {
      this.props.makeBackButtom();
    }
  };
  displayEachCatogoryBalance = (category) => {
    let JSX = [];
    for (let key in category) {
      if (category[key].sumAmount <= 0) {
        JSX.push(
          <div key={JSX.length} className="eachBalancePositive">
            <h1>{key}</h1> <h2> {category[key].sumAmount}</h2>
          </div>
        );
      } else {
        JSX.push(
          <div key={JSX.length} className="eachBalanceNegative">
            <h1>{key}</h1> <h2> {category[key].sumAmount}</h2>
          </div>
        );
      }
    }
    return JSX;
  };
  makeBackButtom = () => {
    if (this.props.makeBackButtom)
      return (
        <button className="buttom" onClick={this.props.makeBackButtom}>
          make new operation
        </button>
      );
  };
  showAllTransaction = (type) => {
    if (type) {
      let count = 0;
      return (
        <div className="allTransactions">
          {this.makeBackButtom()}
          {this.props.dummyData.map((singletTransaction) => {
            count++;
            return (
              <Transaction
                key={singletTransaction.amount}
                singletTransaction={singletTransaction}
                deleteTransaction={this.props.deleteTransaction}
                index={count}
              />
            );
          })}
        </div>
      );
    } else {
      let category = {};

      {
        this.props.dummyData.map((singletTransaction) => {
          if (
            !category[
              singletTransaction.category.replace(" ", "").toLowerCase()
            ]
          ) {
            category[
              singletTransaction.category.replace(" ", "").toLowerCase()
            ] = { sumAmount: singletTransaction.amount };
          } else {
            category[
              singletTransaction.category.replace(" ", "").toLowerCase()
            ].sumAmount += singletTransaction.amount;
          }
        });
      }
      return (
        <div className="catagoreyBalance">
          {this.displayEachCatogoryBalance(category)}
        </div>
      );
    }
  };
  render() {
    return <div>{this.showAllTransaction(this.props.deleteTransaction)}</div>;
  }
}
export default Transactions;
