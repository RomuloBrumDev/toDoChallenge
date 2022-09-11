import React, { Component } from "react";
import styled from "styled-components"

const H1=styled.h1`
border:1px solid blue;
border-radius:5px;
text-align: center;
font-size: 40px;
`
const Section=styled.section`
border-radius:5px;
max-width:100%;
height:450px;
display: flex;
flex-direction:column;
`
const Div2=styled.div`
border-radius:5px;
margin:5px;
display: flex;
flex-direction: wrap;
align-items:center;
justify-content: space-between;

`
const Ul=styled.ul`
border-radius:5px;
display: flex;
flex-direction:column;
width:90vw;
`

const Input=styled.input`
background-color:yellow;
font-size: 20px;
text-align:center;
margin-left:10px;
`
const ButtonAdd=styled.button`
background-color:lightblue;
border-radius:5px;
margin:5px;
`
const Li=styled.li`
border: 4px solid black;
border-radius:0px 10px 0px 0px;
width:150px;
height:100px;
background-color:yellowgreen;
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
font-size:25px;
`

const ButtonX=styled.button`
background-color:whitesmoke;
border-radius:5px;
position:relative;
top: 22px;
left:60px;
`




export default class ListaTarefas extends Component {
  state = {
    tarefa: "",
    listaTarefas: []
  };

  handleChange = (e) => {
    this.setState ({tarefa:e.target.value});
  };

  addTarefa = () => {
    if(this.state.tarefa !== "" && !this.state.tarefa.match(/^[ \t]+$/)) {
      this.setState({
        listaTarefas: this.state.listaTarefas.concat({
          tarefa:this.state.tarefa,
          id: Date.now()
       }),
       tarefa:""
      });
    }
  };
  removerTarefa = (id) =>{
    this.setState({
      listaTarefas:this.state.listaTarefas.filter((item)=>
        item.id !== id)
    });
  };
  render (){
    return(
      <Section>
          <form onSubmit={(event)=>{event.preventDefault()}}>
            <H1>Lista de Tarefas</H1>
            <Input onChange={this.handleChange}
            value={this.state.tarefa} 
            type = "text"
            placeholder="Insira uma Atividade"

            />
            <ButtonAdd onClick={this.addTarefa}>Adicionar</ButtonAdd>
            {this.state.listaTarefas.map((item) => (
              <>
              <Div2>
              <Ul>
                  <Li>
                  {item.tarefa}
                  <ButtonX onClick={()=> this.removerTarefa(item.id)}>x</ButtonX>
                  </Li>
              </Ul>
          </Div2>
          </>
        ))}
      </form>
   </Section>
  );
 }
}
