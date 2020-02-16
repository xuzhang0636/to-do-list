import React, {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: '',
            list: []
        };
        this.newItemChange = this.newItemChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    newItemChange(e) {
        this.setState({newItem: {id: Math.random() + 1, value: e.target.value}});
    }

    addItem(e) {
        let copyOfList = [...this.state.list];
        copyOfList.push(this.state.newItem);
        this.setState({list: copyOfList});
    }

    deleteItem(id) {
        const list = [...this.state.list];
        const updateList = list.filter(item => {
            return id !== item.id;
        });
        this.setState({list: updateList});
    }

    render() {
        return (
            <div className="container">
                Add An Item...
                <div>
                    <input
                        type="text"
                        placeholder="please input an item"
                        onChange={this.newItemChange}/>
                    <button onClick={this.addItem}>Add</button>
                </div>
                <div>
                    <ul>
                        {
                            this.state.list.map(item => {
                                return (
                                    <li key={item.id}>
                                        {item.value}
                                        <button onClick={(e) => this.deleteItem(item.id)}>delete</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;