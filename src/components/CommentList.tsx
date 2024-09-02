// src/components/CommentList.tsx
import React from 'react';
import { List, Typography } from '@mui/material';
import { Comment } from '../types/Types';
import CommentItem from './CommentItem';

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <>
      <Typography variant="h5" component="h3" gutterBottom>Yorumlar</Typography>
      <List>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment.text} author={comment.author} />
        ))}
      </List>
    </>
  );
};

export default CommentList;
