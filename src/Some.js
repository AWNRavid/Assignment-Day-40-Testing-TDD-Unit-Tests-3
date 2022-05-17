import React, { useState } from 'react';

function Some() {
  const [title, setTitle] = useState('');
  return (
    <div>
      <div className="form-group">
        <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} placeholder="Title" data-testid="title" />
      </div>
      {/* <p><span>Title:</span> {title}</p> */}
      <p>{title}</p>
    </div>
  );
}

export default Some;
