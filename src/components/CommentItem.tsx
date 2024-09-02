// src/components/CommentItem.tsx
import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface CommentItemProps {
  comment: string;
  author?: string
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, author = '' }) => {
  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: 2,
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        padding: 2,
      }}
    >
      <Box display="flex" alignItems="center" mb={1}>
        <Avatar sx={{ bgcolor: '#4285F4', mr: 2 }}>
          <AccountCircleIcon />
        </Avatar>
        <Box display="flex" flexDirection="column">
        <Typography
            component="div"
            sx={{
            fontFamily: 'inherit', // Quill editörde seçilen fontu miras alır
            '& p': {
            margin: 0,
            fontFamily: 'inherit',
            },
            '& .ql-font-sans-serif': { fontFamily: 'sans-serif' },
            '& .ql-font-serif': { fontFamily: 'serif' },
            '& .ql-font-monospace': { fontFamily: 'monospace' },
            '& .ql-font-comic-sans': { fontFamily: '"Comic Neue", cursive' },
            '& .ql-font-courier-new': { fontFamily: '"Courier Prime", monospace' },
            '& .ql-font-georgia': { fontFamily: 'Georgia, serif' },
            '& .ql-font-helvetica': { fontFamily: 'Helvetica, sans-serif' },
            '& .ql-font-lucida': { fontFamily: 'Lucida, sans-serif' },
            backgroundColor: 'background.paper', mb: 1, borderRadius: '8px', padding: '16px' }}>
            <div dangerouslySetInnerHTML={{ __html: comment }} />
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem', fontStyle: 'italic', opacity: 0.7 }}>
        {author}
        </Typography>
        </Box>
      </Box>
  </Card>
  );
};

export default CommentItem;
