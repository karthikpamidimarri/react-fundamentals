/** @jsx React.DOM */
(function () {
    'use strict';

    var Quiz = React.createClass({
        render: function () {
            return <div>
                <Count/>
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
           return {counter: 1}
       },
       render: function () {
           return <div><h1>Counter</h1>
                <p>{this.state.counter}</p>
           </div>
       }
    });
    React.renderComponent(<Quiz books= {['The Lord of The Rings', 'The Iliad']}/>,
        document.getElementById('app'));

})();
