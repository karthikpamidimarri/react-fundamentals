/** @jsx React.DOM */
(function () {
    'use strict';

    var Quiz = React.createClass({
        render: function () {
            return <div>
                <Count/>
                <Text content = "I am fullllllllllll" />
            {this.props.books.map(function (b) {
                return <Book title={b} />
            })}
            </div>;
        }
    });

    var Book = React.createClass({
        render : function () {
            return <div><h4>{this.props.title}</h4><showState/></div>;
        }
    });

    var showState = React.createClass({
        getInitialState: function () {
            return {answer: 42};
        },
        render: function () {
            return <div>my state is {this.state.answer}</div>;
        }
    });

    var Count = React.createClass({
       getInitialState: function () {
           var state = {counter: 1};
           setInterval(function () {
               this.setState({counter: this.state.counter + 1});
           }.bind(this), 1000);

           return state;
       },
       render: function () {
           return <div><h1>Counter</h1>
                <CountDisplay counter = {this.state.counter}></CountDisplay>
           </div>;
       }
    });

    var CountDisplay = React.createClass({
        render : function () {
            return <p>{this.props.counter}</p>;
        }
    });

    var Text = React.createClass({
        getDefaultProps : function () {
            return{
                foreGroundColor : 'green',
                backGroundColor : 'red'
            }
        },
        render: function () {
            var styles = {
                color : this.props.foreGroundColor,
                backgroundColor : this.props.backGroundColor
            };

            return <p styles={styles}>{this.props.content}</p>
        }
    });
    React.renderComponent(<Quiz books= {['The Lord of The Rings', 'The Iliad']}/>,
        document.getElementById('app'));

})();
