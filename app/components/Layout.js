import React from "react";

// Import components
import Footer from './layout/Footer';
import Header from './layout/Header';
import ProjectPanel from './layout/ProjectPanel';
import TabBar from './layout/TabBar';

export default class Layout extends React.Component {
  // Create constructor
  constructor() {
    super();

    // State of the View
    this.state = {
      // For navigation panel
      panelOpen: false
    };
  }

  /**
   * toggleProjectPanel - toggles the navigation panel
   * @function toggleProjectPanel
   */
  toggleProjectPanel() {
    // Set panelOpen to current opposite
    const panelOpen = !this.state.panelOpen;

    // Update state
    this.setState({panelOpen}); //panelOpen: panelOpen
  }

  // Render function
  render () {
    // Get the view state to pass as a prop
    const { location } = this.props;
    const viewState = this.props.children.props.route.name;
    const viewId = viewState.toLowerCase();
    // Get the panelOpen state to pass as a prop
    const panelOpen = this.state.panelOpen;

    // Does not update title when going back
    document.title = (viewState === 'Home') ? 'Erick Sauri' : 'Erick Sauri - ' + viewState;

    // Return markup
    return (
      <main id={viewId}>
        <ProjectPanel panelOpen={panelOpen} toggleProjectPanel={this.toggleProjectPanel.bind(this)}/>
        <TabBar toggleProjectPanel={this.toggleProjectPanel.bind(this)} />
        {(()=>{
          if (viewState !== '404' && viewState !== 'About') {
            return(<Header parentId={viewId} />);
          }
        })()}
        {this.props.children}
        <div id='lightbox'></div>
        <Footer />
      </main>
    );
  }
}
