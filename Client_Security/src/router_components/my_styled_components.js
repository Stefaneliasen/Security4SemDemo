import styled from 'styled-components';

export const OuterContainer = styled.div`
display: ${props => props.toggle ? `block;` : `none;`} /* Hidden by default */
position: fixed; /* Stay in place */
z-index: 1; /* Sit on top */
padding-top: 100px; /* Location of the box */
left: 0;
top: 0;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

export const FormContainer = styled.div`
width: 30%;
height: 30%;
background-color: white;
margin: auto;
height: fit-content;
`

export const Form = styled.form`
display: grid;
grid-template-columns: 1fr;
width: 80%;
margin: auto;
`

export const FormBlock = styled.div`
display: grid;
grid-template-columns: 25% 80%;
& input {
    padding: 12px;
    margin: 12px;
    ${props => props.width ? `width:${props.width}` : null}

    &[type=submit] {
        margin: auto;
    }
}

& label {
    padding: 12px;
    margin: 12px;
    ${props => props.width ? `width:${props.width}` : null}
}

`

export const CenterBlock = styled.div`
display: grid;
grid-template-columns: 100%;
width: 20%;
margin: auto;
padding: 12px;

&input {
    padding: 12px;
}
`

export const Span = styled.span`
left: 95%;
width: 3%;
padding: 12px;
font-size: 20px;
margin-top: 12px;
position: relative;

&:hover {
    background-color: skyblue;
    cursor: pointer;
}
`

export const StartPageWrapper = styled.div`
width: 80%;
margin: auto;
`

export const MySQLWrapper = styled.div`
display: grid;
grid-template-columns: 50% 50%;
width: 80%;
height: fit-content;
background-color: grey;
margin: auto;
`;

export const TextArea = styled.textarea`
font-size: 20px;
margin: 16px;
`

export const ListBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`

export const SqlUl = styled.ul`
text-align: center;
list-style-type: none;

& li {
    font-size: 20px;
}
`

export const SubmitButton = styled.input`
width: 15%;
padding: 12px;
margin: 12px;
position: relative;
left: 37%;
`

export const RadioButtons = styled.div`
margin: auto;
position: relative;
right: 20%;

& input {
    margin-top: -1px;
    vertical-align: middle;
}
`