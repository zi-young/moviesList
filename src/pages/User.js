import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './User.module.scss';

const User = () => {
    const {id} = useParams();
    const [user, setUser] =useState(null)
    const [loading, setLoading] =useState(true)

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res => {
            //console.log(res)
            setUser(res.data)
            setLoading(false)
        });
    }, []);

    const userDetail= loading ? (<div className={`${styles.loding}`}>로딩중...</div>):(
        <div className={`${styles.userBox}`}>
            <div className={`${styles.box1}`}>
                <div className={`${styles.nameBox}`}>
                    <div className={`${styles.name}`}>이름 : {user.name}</div>
                    <div className={`${styles.email}`}>이메일 : {user.email}</div>
                    <div className={`${styles.phone}`}>전화번호 : {user.phone}</div>
                    <div className={`${styles.website}`}>웹사이트 : {user.website}</div>
                </div>
            </div>
            <div className={`${styles.box2}`}>
                 <img src={require("../img/user1.png")} alt="이미지1" />
            </div>
        </div>
    )

    return (
        <div>
            <h1 className={`${styles.h1}`}>User Info</h1>
            {userDetail}
        </div>
    );
};

export default User;