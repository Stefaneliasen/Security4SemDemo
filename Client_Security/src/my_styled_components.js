import styled from 'styled-components';

export const HeaderUl = styled.ul`
display: grid;
grid-template-columns: repeat(10, 10%);
grid-template-areas: 
    "a b c d e f g h i j";
list-style-type: none;
font-size: 24px;
border: 3px solid black;
padding: 12px;
`

export const HeaderLi = styled.li`
text-align: center;
padding: 10px;
grid-area: ${props => props.position};

${props => !props.disable ? `:hover {
    background-color: skyblue;
}` : null }

& a {
    text-decoration: none;
    color: black;
}
`

export const Wrapper = styled.div`
width: 80%;
margin: auto;
`