import React from 'react';
import { Image, Form } from 'react-bootstrap';

const Rightside = () => {
    return (
        <div >
            <Form style={{ width: "70%", marginLeft: "10%", narginTop: "10%" }}>
                <Image src='./img/downlode.jpg' thumbnail style={{ width: "150%", marginTop: "20%", marginRight: "50%", border: "none" }} />
            </Form>
        </div>
    )
}

export default Rightside
