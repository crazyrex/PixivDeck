// @flow
import type { State as ColumnBookmarkState } from '../containers/ColumnBookmark/reducer'
import type { State as ColumnFollowState } from '../containers/ColumnFollow/reducer'
import type { State as ColumnHistoryState } from '../containers/ColumnHistory/reducer'
import type { State as ColumnManagerState } from '../containers/ColumnManager/reducer'
import type { State as ColumnRankingState } from '../containers/ColumnRanking/reducer'
import type { State as ColumnRankingR18State } from '../containers/ColumnRankingR18/reducer'
import type { State as ColumnRecommendedState } from '../containers/ColumnRecommended/reducer'
import type { State as ColumnSearchState } from '../containers/ColumnSearch/reducer'
import type { State as ColumnUserIllustState } from '../containers/ColumnUserIllust/reducer'
import type { State as DrawerManagerState } from '../containers/DrawerManager/reducer'
import type { State as HeaderContainerState } from '../containers/HeaderContainer/reducer'
import type { State as IllustByIdState } from '../containers/IllustById/reducer'
import type { State as IllustPreviewState } from '../containers/IllustPreview/reducer'
import type { State as LanguageState } from '../containers/Language/reducer'
import type { State as LoginModalState } from '../containers/LoginModal/reducer'
import type { State as MangaPreviewState } from '../containers/MangaPreview/reducer'
import type { State as ModalManegerState } from '../containers/ModalManeger/reducer'
import type { State as SearchFieldState } from '../containers/SearchField/reducer'
import type { State as SettingModalState } from '../containers/SettingModal/reducer'
import type { State as TableState } from '../containers/Table/reducer'
import type { State as UserByIdState } from '../containers/UserById/reducer'
import type { State as UserDrawerContainerState } from '../containers/UserDrawerContainer/reducer'
import type { State as UserPopoverContainerState } from '../containers/UserPopoverContainer/reducer'

export type State = {
  ColumnBookmark: ColumnBookmarkState,
  ColumnFollow: ColumnFollowState,
  ColumnHistory: ColumnHistoryState,
  ColumnManager: ColumnManagerState,
  ColumnRankingR18: ColumnRankingR18State,
  ColumnRanking: ColumnRankingState,
  ColumnRecommended: ColumnRecommendedState,
  ColumnSearch: ColumnSearchState,
  ColumnUserIllust: ColumnUserIllustState,
  DrawerManager: DrawerManagerState,
  HeaderContainer: HeaderContainerState,
  IllustById: IllustByIdState,
  IllustPreview: IllustPreviewState,
  Language: LanguageState,
  LoginModal: LoginModalState,
  MangaPreview: MangaPreviewState,
  ModalManeger: ModalManegerState,
  SearchField: SearchFieldState,
  SettingModal: SettingModalState,
  Table: TableState,
  UserById: UserByIdState,
  UserDrawerContainer: UserDrawerContainerState,
  UserPopoverContainer: UserPopoverContainerState,
}
