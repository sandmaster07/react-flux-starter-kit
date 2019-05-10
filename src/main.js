$ = jQuery = require('jquery');

var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPages');

var App = React.createClass({
    render: function() {
        var Child;
    }
});

React.render(<Home />, document.getElementById('app'));