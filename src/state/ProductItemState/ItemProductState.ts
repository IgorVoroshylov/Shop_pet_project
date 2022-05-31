import { action, makeObservable, observable } from 'mobx';

export default class ItemProductState {
  item: GoodsItemType | null = null;

  comments: Array<CommentType> = [];

  isLoading = true;

  error = '';

  //для анимации сообщения о успешности добавления новой позиции в админ панели
  successLoading = false;

  constructor() {
    makeObservable(this, {
      successLoading: observable,

      item: observable,
      isLoading: observable,
      error: observable,
      comments: observable,
      setItem: action,
      addComment: action,
      setIsLoading: action,
      setError: action,
      setComments: action,
      removeComment: action,

      setSuccessLoading: action,
    });
  }

  setSuccessLoading = (bool: boolean) => {
    this.successLoading = bool;
  };

  changeSuccessLoading = () => {
    setTimeout(this.setSuccessLoading, 3000, false);
  };

  setItem = (item: GoodsItemType | null) => {
    this.item = item;
  };

  setIsLoading = (bool: boolean) => {
    this.isLoading = bool;
  };

  setError = (error: string) => {
    this.error = error;
  };

  setComments = (comment: Array<CommentType>) => {
    this.comments = comment;
  };

  addComment = (comment: CommentType) => {
    this.comments = [...this.comments, comment];
  };

  removeComment = (commentId: string) => {
    this.comments = this.comments.filter((comment) => comment.id !== commentId);
  };
}
