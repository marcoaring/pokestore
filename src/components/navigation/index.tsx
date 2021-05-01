import INavigation from './index.interface';

import * as S from './styles';

export function Navigation({ currentPagination, pagination }: INavigation) {
  const items = [];
  for (let i = 1; i <= pagination; i++) {
    items.push(
      <S.Item
        className={currentPagination === i ? '-active' : ''}
        key={i}
        to={i <= 1 ? '/loja' : `/loja/${i}`}>
        {i}
      </S.Item>
    );
  }
  return <S.Navigation>{items}</S.Navigation>;
}
