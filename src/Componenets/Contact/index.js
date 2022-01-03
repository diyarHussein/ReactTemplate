import React from "react";
import {ContactDiv, ContactTitle, Span,Form, FormInputDiv, InputEmail, InputText, InputSub, Submit, Textarea} from "./style.js"
import Footer from "../Footer/index.js";

const Contact = () => {
    return (
        <React.Fragment>
            <ContactDiv>
                <div class="container">
                    <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                    <Form>
                        <FormInputDiv>
                            <InputText type="text" placeholder="Your Name" />
                            <InputEmail type="email" placeholder="Your Email"/>
                        </FormInputDiv>
                        <InputSub type="text" class="sub" placeholder="Your Subject"/>
                        <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                        <Submit type="submit" value="Send Message"/>
                    </Form>
                </div>
            </ContactDiv>
            <Footer/>
        </React.Fragment>
        
    );
}

export default Contact;