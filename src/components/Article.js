import React from 'react';

function Article({ title, date = "January 1, 1970", preview }) {
  const minutesToRead = Math.ceil(preview.length / 200); // Assuming ~200 words per minute
  let emojis = [];

  if (minutesToRead < 30) {
    for (let i = 0; i < minutesToRead; i += 5) {
      emojis.push("☕️");
    }
  } else {
    for (let i = 0; i < minutesToRead; i += 10) {
      emojis.push("🍱");
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{emojis.join(' ') + ' min read'}</p>
    </article>
  );
}

export default Article;