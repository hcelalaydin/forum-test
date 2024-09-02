// src/components/ContentPane.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Topic from './Topic';
import { Topic as TopicType, Comment } from '../types/Types';
import Sidebar from './Sidebar';

const topics: TopicType[] = [
  { id: 1, title: 'React Hooks', description: 'React Hooks hakkında tartışma.', content: 'React Hooks, fonksiyonel bileşenlerde durum ve yan etkileri yönetmenize olanak tanır.' },
  { id: 2, title: 'TypeScript', description: 'TypeScript ile ilgili sorular.', content: 'TypeScript, JavaScript için güçlü bir tip sistemi sağlayan bir dil eklentisidir.' },
  { id: 3, title: 'React Context API', description: 'React Context API hakkında tartışma.', content: 'React Context API, uygulamanızdaki bileşenler arasında durum paylaşımına yardımcı olur.' },
  { id: 4, title: 'React Router', description: 'React Router ile ilgili sorular.', content: 'React Router, React uygulamalarınızda client-side routing oluşturmaya yardımcı olur.' },
  { id: 5, title: 'Redux', description: 'Redux ile ilgili sorular.', content: 'Redux, React uygulamalarınızda durum yönetimine yardımcı olur.' },
  { id: 6, title: 'React Hooks vs Redux', description: 'React Hooks ve Redux arasındaki farklar.', content: 'React Hooks ve Redux arasındaki farklar ve hangi durumda hangi teknolojiyi kullanacağını belirleme.' },
  { id: 7, title: 'React Native', description: 'React Native ile ilgili sorular.', content: 'React Native, React uygulamalarını mobil cihazlarda çalıştırmanıza yardımcı olur.' },
  { id: 8, title: 'React Testing Library', description: 'React Testing Library ile ilgili sorular.', content: 'React Testing Library, React uygulamalarınızı test etmenize yardımcı olur.' },
  { id: 9, title: 'React Developer Tools', description: 'React Developer Tools ile ilgili sorular.', content: 'React Developer Tools, React uygulamalarınızı geliştirme süresince yardımcı olur.' },
  { id: 10, title: 'React Best Practices', description: 'React Best Practices', content: 'React uygulamalarınızı geliştirme süresince yardımcı olur.' },
];

const comments: Comment[] = [
  { id: 1, topicId: 1, text: 'React Hooks gerçekten çok kullanışlı.' },
  { id: 2, topicId: 2, text: 'TypeScript, JavaScript kodunu daha güvenli hale getiriyor.' },
];

const ContentPane: React.FC = () => {
  return (
   
    <main style={{ flexGrow: 1, padding: '2px', transition: 'all 0.3s ease' }}>

      <Routes>
        <Route path="/" element={<Home topics={topics} />} />
        <Route path="/topic/:id" element={<Topic topics={topics} comments={comments} />} />
      </Routes>
    </main>
  );
};

export default ContentPane;
