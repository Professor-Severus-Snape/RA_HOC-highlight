import { ComponentType } from 'react';
import New from '../components/New/New';
import Popular from '../components/Popular/Popular';
import TVideo from '../models/TVideo';

const withCounter = (Component: ComponentType<TVideo>) => {
  return (props: TVideo) => {
    if (props.views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    } else if (props.views > 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    }
    return <Component {...props} />;
  };
};

export default withCounter;
