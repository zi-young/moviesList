import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Appmovie.module.scss';

const Appmovie = ({id, title, posterPath, date}) => {
    return (
        <div key={id} className={styles.amovie}>
           <Link to={`/about/${id}` }>
                <div className={styles.imgBox}>
                    <img  className={styles.img}
                    src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                    alt={title}
                    />
                </div>
                <h2  className={styles.title}>{title}</h2>
                <div  className={styles.date}>{date}</div>
           </Link>
        </div>
    );
};

export default Appmovie;