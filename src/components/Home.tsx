// src/components/Home.tsx
import React from 'react';
import { Topic } from '../types/Types';
import { List, ListItem, ListItemText, Card, CardActionArea, Container, Grid, Typography  } from '@mui/material';
import { Link } from 'react-router-dom';
import TopicItem from './TopicItem';

interface HomeProps {
  topics: Topic[];
}

const Home: React.FC<HomeProps> = ({ topics }) => {
  return (
    
    <>
        <Typography variant="h6" gutterBottom>
        Top Stories
        </Typography>
       
        <List sx={{ padding: 0 }}>
                {topics.map((topic) => (
                <TopicItem key={topic.id} id={topic.id} title={topic.title} description={topic.description} />
                ))} 
            </List>
      

    </>
  );
};
export default Home;
