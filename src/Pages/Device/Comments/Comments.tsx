import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { useFela } from 'react-fela';
import { v4 as uuidv4 } from 'uuid';
import useStore from '../../../hooks/useStore';
import {
  AddCommentRule,
  CommentButton,
  CommentDateRule,
  CommentRule,
  TextAreaRule,
} from './comments.style';

type OwnProps = {
  id: string;
};

const Comments: React.FC<OwnProps> = ({ id }) => {
  const { comments, createComments, deleteComments } =
    useStore('ItemProductState');
  const { isAdmin } = useStore('UserState');
  const [newComment, setNewComment] = useState<string>('');
  const { css, theme } = useFela();

  const addNewComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const comment: CommentType = {
      id: uuidv4(),
      productId: id,
      description: newComment,
      date: new Date().toLocaleDateString(),
    };

    createComments(comment).then((response) => {
      if (response) setNewComment('');
    });
  };

  return (
    <section>
      <h2>Comments:</h2>
      {comments.map((comment) => (
        <div key={comment.id} className={css(CommentRule)}>
          <div>
            <div className={css()}>{comment.description}</div>
            <div className={css(CommentDateRule)}>{comment.date}</div>
          </div>

          {isAdmin && (
            <button
              className={css(CommentButton(theme as ThemeType))}
              onClick={() => deleteComments(comment.id)}
            >
              Delete
            </button>
          )}
        </div>
      ))}

      <div>
        <form className={css(AddCommentRule)} onSubmit={addNewComment}>
          <textarea
            className={css(TextAreaRule(theme as ThemeType))}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className={css(CommentButton(theme as ThemeType))}
            type="submit"
          >
            Add comment
          </button>
        </form>
      </div>
    </section>
  );
};

export default observer(Comments);
