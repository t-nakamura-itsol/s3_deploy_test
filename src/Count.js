import React from 'react';

export class Count extends React.Component {
    constructor() {
        super();
        this.state = {count1: 0, count2: 0};
        this.doAction1 = this.doAction1.bind(this);
        this.doAction2 = this.doAction2.bind(this);
    }
    
    doAction1() {
        this.setState({
            count1: this.state.count1 + 1,
          });
        this.setState({
            count1: this.state.count1 + 1,
        });
    } 

    doAction2() {
        this.setState((state, props) => ({
            count2: state.count2 + 1,
          }));
        this.setState((state, props) => ({
            count2: state.count2 + 1,
        }));
    }     

    render() {
        return (
            <div>
                <p>引数にオブジェクトを渡した場合:{this.state.count1}</p>
                <button onClick={this.doAction1}>Click</button>

                <p>引数に関数を渡した場合:{this.state.count2}</p>
                <button onClick={this.doAction2}>Click</button>                
            </div>
        );
    }
}

