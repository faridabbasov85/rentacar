import React, { useState, useEffect } from 'react';
import styles from './Application.module.css'; 
import { FaTrash } from 'react-icons/fa'; 
import axios from 'axios';

const Application = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const response = await axios.get('http://localhost:5500/applications');
      setApplications(response.data); 
    };
    fetchApplications();
  }, []);

  const handleDelete = (id) => {
    console.log("Silinəcək ID:", id);
    axios
      .delete(`http://localhost:5500/applications/${id}`)
      .then((response) => {
        console.log(response.data);
        setApplications((prev) => prev.filter((app) => app._id !== id));
      })
      .catch((error) => {
        console.error("Silmə xətası:", error);
      });
  };
  
  return (
    <div className={styles.container}>
      <h1>Müraciətlər</h1>
      <div className={styles.applicationsContainer}>
        {applications.map((app) => (
          <div key={app.id} className={styles.applicationCard}>
            <div className={styles.applicationDetails}>
              <h3>{app.name}</h3>
              <p><strong>Mövzu:</strong> {app.topic}</p>
              <p><strong>Mesaj:</strong> {app.message}</p>
              <p><strong>Telefon:</strong> {app.phoneNumber}</p>
            </div>
            <button 
              className={styles.deleteButton} 
              onClick={() => handleDelete(app._id)}
            >
              <FaTrash size={20} color="#003271" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Application;
