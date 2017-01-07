import React from 'react';

export default class Article extends React.Component {
  constructor() {
    super();
  }

  render() {
    const props = this.props;

    return (
      <article className={'container ' + props.articleClasses}>
        {props.articleContent}
  		</article>
    );
  }
}
