import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Component } from "react";
import Transactions from "./components/Transactions";
import Operations from "./components/Operations";
import axios, { Axios } from "axios";
import Alert from "@mui/material/Alert";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      totalBalance: 0,
      tempTransaction: { amount: 0, vendor: "", category: "" },
      clicked: false,
    };
  }
  copyObject() {
    let obj = {};
    for (let key in this.state.tempTransaction) {
      obj[key] = this.state.tempTransaction[key];
    }
    return obj;
  }
  resetAmount = () => {
    let obj = this.copyObject(this.state.tempTransaction);
    obj["amount"] = 0;
    this.setState({ tempTransaction: obj });
  };
  updateSetAndBalance = () => {
    this.getDataFromDataBase().then((res) => {
      console.log(res);
      this.setState({ dummyData: res }, () => {
        let totalSum = 0;
        this.state.dummyData.forEach((transaction) => {
          totalSum += transaction.amount;
        });
        this.setState({ totalBalance: totalSum });
      });
    });
  };

  componentDidMount = () => {
    this.updateSetAndBalance();
  };
  userInputBining = (event) => {
    let obj = this.copyObject(this.state.tempTransaction);
    if (event.target.id == "amount" && !isNaN(Number(event.target.value))) {
      obj[event.target.id] = Number(event.target.value);
    } else {
      obj[event.target.id] = event.target.value;
    }
    this.setState({ tempTransaction: obj });
  };
  transactionOperation = (addingOperation) => {
    let obj = {};
    for (let key in this.state.tempTransaction) {
      if (key === "amount" && isNaN(this.state.tempTransaction[key])) {
        alert("Please insert the right value in amount input");

        this.resetAmount();
      } else if (this.state.tempTransaction[key] == "") {
        alert(`please fill the ${key} input`);
        return;
      } else {
        obj[key] = this.state.tempTransaction[key];
      }
    }
    if (!addingOperation) {
      obj.amount *= -1;
    }
    this.postNewTransaction(obj).then(() => {
      this.updateSetAndBalance();
      this.setState(
        {
          tempTransaction: { amount: 0, vendor: "", category: "" },
        },
        () => {
          this.setState({ clicked: true });
        }
      );
    });
  };
  Withdraw = () => {
    this.transactionOperation(false);
  };
  Deposit = () => {
    this.transactionOperation(true);
  };
  deleteTransaction = (index) => {
    this.deleteTransactionFromDB(this.state.dummyData[index - 1]).then(() => {
      this.updateSetAndBalance();
    });
  };
  getDataFromDataBase = async () => {
    let response = await (
      await axios.get("http://localhost:3001/transactions")
    ).data;
    return response;
  };
  postNewTransaction = async (obj) => {
    await axios.post("http://localhost:3001/transaction", obj);
  };
  deleteTransactionFromDB = async (transaction) => {
    await axios.delete("http://localhost:3001/transaction", {
      data: transaction,
    });
  };
  changeClickedState = () => {
    this.setState({ clicked: false });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="NavBar">
            <Link className="Link" to="/operation">
              Make new Transaction Operation
            </Link>
            <Link className="Link" to="/Transactions">
              show all transactions
            </Link>
            <Link className="Link" to="/ListTransactionSum">
              Show category balance
            </Link>
            <div className="Link balance">
              <span>Total Balance</span>
              {this.state.totalBalance < 500 ? (
                <span className="Red">{this.state.totalBalance}</span>
              ) : (
                <span className="Green">{this.state.totalBalance}</span>
              )}
            </div>
          </div>

          <Route
            path="/ListTransactionSum"
            exact
            render={() => {
              return (
                <Transactions
                  key={"Transactions"}
                  dummyData={this.state.dummyData}
                />
              );
            }}
          />
          <Route
            exact
            path="/operation"
            render={() => {
              return (
                <div>
                  {!this.state.clicked ? (
                    <Operations
                      key={"Operations"}
                      userInputBining={this.userInputBining}
                      tempTransaction={this.state.tempTransaction}
                      Deposit={this.Deposit}
                      Withdraw={this.Withdraw}
                      redirect={this.state.redirect}
                    />
                  ) : (
                    <Transactions
                      key={"Transactions"}
                      dummyData={this.state.dummyData}
                      deleteTransaction={this.deleteTransaction}
                      makeBackButtom={this.changeClickedState}
                    />
                  )}
                </div>
              );
            }}
          />
          <Route
            exact
            path="/Transactions"
            render={() => {
              return (
                <Transactions
                  key={"Transactions"}
                  dummyData={this.state.dummyData}
                  deleteTransaction={this.deleteTransaction}
                />
              );
            }}
          />
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Transactions
                  key={"Transactions"}
                  dummyData={this.state.dummyData}
                  deleteTransaction={this.deleteTransaction}
                />
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
