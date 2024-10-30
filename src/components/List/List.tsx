import withCounter from '../../libs/withCounter';
import Article from '../Article/Article';
import Video from '../Video/Video';
import TVideo from '../../models/TVideo';

interface IListProps {
  list: TVideo[];
}

const List = ({ list }: IListProps) => {
  const ArticleViews = withCounter(Article);
  const VideoViews = withCounter(Video);

  return list.map((item) => {
    switch (item.type) {
      case 'article':
        return <ArticleViews key={item.id} {...item} />;
      case 'video':
        return <VideoViews key={item.id} {...item} />;
    }
  });
};

export default List;
