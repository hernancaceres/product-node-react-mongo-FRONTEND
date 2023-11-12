// src/components/Dashboard.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/protected', {
          headers: {
            'x-access-token': localStorage.getItem('token'),
          },
        });

        setData(response.data);
      } catch (error) {
        console.error('Error al obtener datos protegidos:', error.response.data.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{data.message}</p>
    </div>
  );
};

export default Dashboard;
