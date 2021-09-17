import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,body{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
}

*,*::after,*::before{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 300ms;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(255, 255, 255);
  background-color: #56B3FF;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%2356B3FF' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%2358a7f2' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23599be5' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%235a8fd7' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%235984ca' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%235878bc' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23566daf' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%235462a1' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23515894' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%234d4d86' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23494379' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%2345396c' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%233f305f' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%233a2652' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23341d46' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%232d143a' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23270c2f' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}

input {
  width: 15rem;
  height: 2rem;
  border-radius: 0.5rem;
  outline: none;
  padding-left: 1rem;
}

label {
  color: #ffe281;
}

span {
  color: #ffe281;
}

h3 {
  color: orange;
  position: absolute;
  opacity: 0.3;
  font-size: 12rem;
}

h4 {
  color: #ffd8ca;
  border-bottom: 2px solid orangered;

h6 {
  color: orange;
  position: absolute;
  opacity: 0.3;
  font-size: 12rem;
  bottom: 25rem;
}

`;
