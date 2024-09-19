import React, { useState, useEffect } from 'react';

export const Data = ({ refreshData }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/expenses');
      if (!response.ok) {
        throw new Error('Ошибка при загрузке данных');
      }
      const result = await response.json();
      setData(result); // Устанавливаем данные в состояние
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refreshData]);

  if (data.length === 0) return 'Loading...'; // Пока нет данных, показываем загрузку

  return (
    <div>
      <ul style={{ border: 'solid 1px black', padding: '5px', borderRadius: '5px', margin: '0px' }}>
        {data.map((item) => (
          <li
            style={{
              listStyle: 'none',
              display: 'flex',
              border: 'solid 1px black',
              borderRadius: '5px',
              margin: '5px 0px',
            }}
            key={item.id}>
            <div className="item">
              <strong>ID:</strong>
              <div>{item.id}</div>
            </div>
            <div className="item">
              <strong>Дата и время:</strong>
              <div>{new Date(item.dateTime).toLocaleString()}</div>
            </div>
            <div className="item">
              <strong>Автор:</strong>
              <div>{item.author}</div>
            </div>
            <div className="item">
              <strong>Сумма:</strong>
              <div>{item.sum} tenge.</div>
            </div>
            <div className="item">
              <strong>Категория:</strong>
              <div>{item.category}</div>
            </div>
            <div className="item">
              <strong>Комментарий:</strong>
              <div>{item.comment}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
