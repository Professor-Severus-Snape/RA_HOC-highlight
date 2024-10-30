import { PropsWithChildren } from 'react';
import './new.css';

const New = ({ children }: PropsWithChildren) => {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {children}
    </div>
  );
};

export default New;
