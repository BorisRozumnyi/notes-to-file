import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { frontend, NAME_FOR_REPLACEMENT } from '../../urls';
import { StyledLi } from './List.styles';

export const List = ({ list }) => {
  return (
    <ul>
      {list &&
        list.map((item) => (
          <Li key={item}>
            <Link to={frontend.note.replace(NAME_FOR_REPLACEMENT, `:${item}`)}>{item}</Link>
          </Li>
        ))}
    </ul>
  );
};

const Li = ({ children }) => {
  const [shownDetail, setShownDetail] = useState(false);
  return (
    <StyledLi onMouseOver={() => setShownDetail(true)} onMouseLeave={() => setShownDetail(false)}>
      {children}
      {shownDetail && <MenuItem />}
    </StyledLi>
  );
};

const MenuItem = () => {
  return (
    <div>
      <button>Edit</button>
      <button>Remove</button>
    </div>
  );
};
