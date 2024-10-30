import Article from '../Article/Article';
import Video from '../Video/Video';
import TVideo from '../../models/TVideo';

interface IListProps {
  list: TVideo[];
}

const List = ({ list }: IListProps) => {
  return list.map((item) => {
    switch (item.type) {
      case 'video':
        return <Video {...item} />;
      case 'article':
        return <Article {...item} />;
    }
  });
};

export default List;
