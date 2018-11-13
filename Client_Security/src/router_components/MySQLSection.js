import React, { Component } from 'react';
import { StartPageWrapper } from './my_styled_components';
import Queries from '../rest/Queries';
import ListResults from './components/ListResults';

import { MySQLWrapper, TextArea, ListBlock, SubmitButton, RadioButtons } from './my_styled_components'

class MySQLSection extends Component {

    state = {
        radioToggleSafe: false,
        radioToggleNotsafe: true,
        queryResults: [],
        queryString: "",
        loader: false,
        guiMessage: ""
    }


    handleQuery = () => {
        const { queryString, radioToggleNotsafe, radioToggleSafe } = this.state;
        this.setState({
            guiMessage: '',
            queryResults: ''
        })
        this.setState({
            loader: true
        }, async () => {
            if(radioToggleNotsafe && !radioToggleSafe) {
                const responsePackage = await Queries.runNotSafeQuery(queryString);
                if (!responsePackage.isError) {
                    this.setState({
                        queryResults: responsePackage,
                        loader: false
                    })
                } else {
                    this.setState({
                        guiMessage: responsePackage.message
                    })
                }
            } else {
                const responsePackage = await Queries.runSafeQuery(queryString);
                if (!responsePackage.isError) {
                    this.setState({
                        queryResults: responsePackage,
                        loader: false
                    })
                } else {
                    this.setState({
                        guiMessage: responsePackage.message
                    })
                }
            }
        })
    }

    handleTextArea = (e) => {
        this.setState({
            queryString: e.target.value
        })
    }

    handleRadioClick = (e) => {
        const target = e.target;
        if (target.value === "notSafe") {
            this.setState({ radioToggleNotsafe: true, radioToggleSafe: false })
        } else {
            this.setState({ radioToggleNotsafe: false, radioToggleSafe: true })
        }
    }

    render() {
        const { radioToggleSafe, radioToggleNotsafe, queryResults, queryString, guiMessage } = this.state;
        return (
            <StartPageWrapper>
                <h1 style={{ textAlign: "center" }}>MySQL</h1>
                <h1 style={{ textAlign: "center", color: "red" }}>{guiMessage}</h1>
                <MySQLWrapper>
                    {(radioToggleNotsafe && !radioToggleSafe ? (
                        <TextArea rows="10" value={queryString} onChange={this.handleTextArea}>
                        </TextArea>) : <div>
                            <h2 style={{ color: "white", padding: "6px" }}>Type in id to get a user</h2>
                            <input style={{ margin: "12px" }} type="text" value={queryString} onChange={this.handleTextArea} />
                        </div>)}
                    <ListBlock>
                        {(queryResults.length ?
                            (<ListResults queryResults={queryResults} />)
                            :
                            null
                        )}

                    </ListBlock>
                    <SubmitButton onClick={this.handleQuery} type="submit" value="Run" />
                    <RadioButtons>
                        <input onChange={this.handleRadioClick} type="radio" value="notSafe" checked={radioToggleNotsafe} /><label>Not safe</label>
                        <input onChange={this.handleRadioClick} type="radio" value="safe" checked={radioToggleSafe} /><label>Safe</label>
                    </RadioButtons>
                </MySQLWrapper>
            </StartPageWrapper>
        );
    }
}

export default MySQLSection;