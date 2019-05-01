import React, { Component } from 'react';

const Like = props => {
  let classes = 'fa fa-heart';

  if (!props.liked) classes += '-o';
  return (
    <div>
      <i
        className={classes}
        aria-hidden='true'
        onClick={props.liked}
        onClick={props.onClick}
      />
    </div>
  );
};

export default Like;
