# 3 main Steps
## Cookie Cutter Analogy

### 1. React.CreateClass();
This will be the first step, starts with an object with a render function as first key value pair;

```javascript
var NameOfComponent = React.CreateClass({
  render: function () {
    return <html>
    html code goes in here
    //IMPORTANT: class becomes className
    //IMPORTANT: {this.props.pairFromKeyDesired}
    //IMPORTANT: other components can/will be inserted using custom tags with component name
    </html>
  }
  })

```
### 2. Create object with sample information to place within {this.props.pairFromKeyDesired}

var sampleData = {
    title: 'Show Courses',
    number: 12,
    header: 'Learn React',
    description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
    imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
  };

### 3. Create react Element and set it to a variable

First parameter tells it what to create based on available components (outermost, with others nested inside)

Create and return a new ReactElement of the given type. The type argument can be either an html tag name string (eg. 'div', 'span', etc), or a ReactClass (created via React.createClass).
``` javascript
ReactElement createElement(
  string/ReactClass type,
  [object props],
  [children ...]
)
```

``` javascript
var element = React.createElement(Thumbnail, options);
ReactDOM.render(element, document.querySelector('.container'));
```
