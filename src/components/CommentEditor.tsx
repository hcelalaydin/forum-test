import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TextField, Button } from '@mui/material';

const CommentEditor: React.FC<{ onSubmit: (commentText: string) => void }> = ({ onSubmit }) => {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  const handleSubmit = () => {
    onSubmit(editorContent);
    setEditorContent(''); // Yorum gönderildikten sonra editörü temizliyoruz
  };

  return (
    <div>
      <ReactQuill
        value={editorContent}
        onChange={handleEditorChange}
        modules={{
          toolbar: [
            [{ font: [] }],
            ['bold', 'italic', 'underline'],
            [{ 'header': [1, 2, false] }],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean'] // Temizle düğmesi
          ],
        }}
        formats={[
          'font', 'header', 'bold', 'italic', 'underline',
          'blockquote', 'code-block', 'list', 'bullet',
          'link', 'image'
        ]}
        placeholder="Yorumunuzu yazın..."
      />
      <button onClick={handleSubmit}>Yorum Yap</button>
    </div>
  );
};

export default CommentEditor;
