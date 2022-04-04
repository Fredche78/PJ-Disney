import React from 'react';
import { Modal, Tag } from 'antd';
import { PlayCircleTwoTone } from '@ant-design/icons';

export const MovieDisplay = props => {

    // if (!props.movie) {
    //     return <p>Chargement</p>
    // }

    console.log(props.modalVisible);
    const autoplay = props.modalVisible ? "autoplay=1" : "autoplay=0";
    // const autoplay = "autoplay=1";
    // console.log(`${props.movie.video}?${autoplay}&controls=2&showinfo=0&rel=0&modestbranding=1&autohide=1`)
    return (
        <div className="main">
            <div className="containerWrap">
                <div className="poster" onClick={props.playMovie}>
                    <img alt={props.movie.title} src={props.movie.poster} />
                        <div className="circle"><PlayCircleTwoTone />
                        </div>
                </div>
            </div>

            <div className="infos">
                <div className = "title">
                    {props.movie.title}
                </div>
                <div className="company">
                    <Tag color="#4770f5">{props.movie.company}</Tag>
                </div>
                <div className ="resume">
                    {props.movie.description}
                </div>
            </div>

            <Modal visible={props.modalVisible}
                onCancel={props.handleCancel}
                footer={null}
                width={"100%"}
                height={"100%"}
                wrapClassName={"movie-modal"}
                >
                <iframe src={`${props.movie.video}?${autoplay}&controls=2&showinfo=0&rel=0&modestbranding=1&autohide=1`} title={props.movie.title} allow="autoplay" frameBorder={0} allowFullScreen />
            </Modal>
        </div>
    );
}