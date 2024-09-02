// src/components/Topic.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Topic as TopicType, Comment } from '../types/Types';
import { Container, Card, CardContent, Typography, List } from '@mui/material';
import CommentList from './CommentList';
import CommentItem from './CommentItem';
import CommentEditor from './CommentEditor';


interface TopicProps {
  topics: TopicType[];
  comments: Comment[];
}

const Topic: React.FC<TopicProps> = ({ topics, comments }) => {
  const { id } = useParams<{ id: string }>();

  const topic = topics.find(t => t.id === Number(id));

  const [commentList, setCommentList] = useState<Comment[]>(comments.filter(comment => comment.topicId === Number(id)));

  if (!topic) {
    return <div>Konu bulunamadı.</div>;
  }
  const addComment = (newCommentText: string) => {
    const newComment: Comment = {
      id: commentList.length + 1, // Yeni id oluşturuyoruz (geçici olarak)
      topicId: topic.id,
      text: newCommentText,
      author: 'admin'
    };
    setCommentList([...commentList, newComment]); // Yeni yorumu listeye ekliyoruz
  };
  
  return (
    <Container>
      <Card sx={{ mb: 13 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {topic.title}
        </Typography>
        <Typography variant="body1">{topic.content}</Typography>
        </CardContent>
      </Card>
      <CommentList comments={commentList} />
      {/* Yorum düzenleyici burada */}
      <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4 }}>
        Yeni Yorum Ekle
      </Typography>
      {/* CommentEditor'a addComment fonksiyonunu prop olarak geçiyoruz */}
      <CommentEditor onSubmit={addComment} />
    </Container>
  );
};
export default Topic;
