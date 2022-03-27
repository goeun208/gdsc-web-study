import React from "react";
import styles from "./Video.module.css";
import {MdCircle, MdArrowForwardIos, MdArrowBackIos} from "react-icons/md"
import rtodo from "./image/react todo.png"
import nomad from "./image/nomad.png"
import jscode from "./image/jscode.png"
import inf from "./image/in.png"
import back from "./image/back.png"
import forward from "./image/forward.png"
import Navbar from "./Navbar";

let jsvideo = [[jscode, "https://youtu.be/PZIPsKgWJiw", 1],[jscode, "https://youtu.be/PZIPsKgWJiw", 2], [jscode, "https://youtu.be/PZIPsKgWJiw", 3]];
let rvideo = [[nomad, "https://youtu.be/YNEdj1MNbok", 4],[rtodo, "https://youtu.be/51zgTcx3_9w", 5],[inf, "https://youtu.be/fgoMqmNKE18", 6]];

function Video() {
    return(
        <div className={styles.wrap}>
            <Navbar />
            <div className={styles.jsblock}>
                <h2><MdCircle color="#6B6FAE" size={25}/> JavaScript</h2>
                <div className={styles.imgbox}>
                    <img src={back}/>
                    {jsvideo.map((item) =>
                    (
                        <div key={item[2]}>
                            <a href={item[1]} target="_blank">
                                <img src={item[0]} />
                            </a>
                        </div>
                    ))}
                    <img src={forward}/>
                </div>
            </div>
            <div className={styles.rblock}>
                <h2><MdCircle color="#6B6FAE" size={25}/> ReactJS</h2>
                <div className={styles.imgbox}>
                <button><MdArrowBackIos size={70} /> </button>
                    {rvideo.map((item) =>
                    (
                        <div key={item[2]}>
                            <a href={item[1]} target="_blank">
                                <img src={item[0]} />
                            </a>
                        </div>
                    ))}
                    <button><MdArrowForwardIos size={70} /> </button>
                </div>
            </div>
        </div>
    );
}

export default Video;