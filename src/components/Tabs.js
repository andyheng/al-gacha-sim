import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderActiveContent = this.renderActiveContent.bind(this);
  }

  //sets the active tab depending on the tabindex of the clicked item
  handleClick(tabIndex) {
    this.setState(() => ({
      activeTabIndex: tabIndex === this.state.activeTabIndex ? 0 : tabIndex
    }))
  }

  renderChildren() {
    // Map through children of tabs (the panels)...
    return React.Children.map(this.props.children, (child, index) => {
      // clone them, and pass an object of props to set on the cloned element(s)
      return React.cloneElement(child, {
        onClick: this.handleClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex
      })
    })
  }

  // renders the current content
  renderActiveContent() {
    // console.log(this.props.children);
    // console.log(this.state.activeTabIndex);
    // console.log(this.props.children[this.state.activeTabIndex])
    return this.props.children[this.state.activeTabIndex].props.children
    // if (this.props.children[this.state.activeTabIndex]) {
    //   return this.props.children[this.state.activeTabIndex].props.children
    // }
  }

  render() {
    // console.log(this.props.children);
    // console.log(this.state);
    return (
      <div>
        <div>
        {this.renderChildren()}
      </div>
      <div>
        {this.renderActiveContent()}
      </div>
      </div>
    )
  }
}

export default Tabs