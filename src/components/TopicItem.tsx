// src/components/TopicItem.tsx
import React from 'react';
import { Card, CardContent, Typography, CardActionArea, Box, Link } from '@mui/material';
//import { Link } from 'react-router-dom';
import ForumIcon from '@mui/icons-material/Forum';



interface TopicItemProps {
  id: number;
  title: string;
  description: string;
}

const TopicItem: React.FC<TopicItemProps> = ({ id, title, description }) => {
  const link = `/topic/${id}`;

  return (
<Card
      sx={{
        mb: 0.5, // Daha fazla boşluk
        ml: 'auto',
        mr: 'auto', // Ortaya hizalama
        width: '100%', // Kart genişliği
        maxWidth: 1600, // Maksimum genişlik
        borderRadius: 1.5,
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
        },
        padding: 0
      }}
    >
  <Link href={link} underline="none" color="primary">
    <CardActionArea sx={{ p: 0 }}>
      {/* Kartın içeriğini sarar. p: 0 ile padding 0'a ayarlanır. */}
      <CardContent sx={{ p: 0.5 }}>
        {/* Kartın içeriğini sarar. */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Flexbox ile her iki tarafı da ayırır. */}
          <Box display="flex" alignItems="center">
            {/* Flexbox ile ikon ve metinleri ayırır. */}
            <ForumIcon
              color="primary"
              sx={{ mr: 1, fontSize: 12 }}
            />
            {/* Forum ikonu. ml: 1 ile sola 1px boşluk bırakılır. */}
            <Typography sx={{ mr: 1, fontSize: 14 }} fontWeight="bold">
              {/* Başlık. fontweight: bold ile kalın yapar. */}
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
              {/* Açıklama. mt: 1 ile yukarıdan 1px boşluk bırakılır. */}
              {description}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </CardActionArea>
  </Link>
       
</Card>
  );
};

export default TopicItem;
