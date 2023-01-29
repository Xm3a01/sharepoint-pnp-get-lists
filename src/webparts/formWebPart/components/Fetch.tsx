/* eslint-disable no-debugger */
// import { escape } from "@microsoft/sp-lodash-subset";
import * as React from "react";

import { Component , ReactElement } from "react";
import { IFormWebPartProps } from "./IFormWebPartProps";

import pnp from 'sp-pnp-js';
import { IDataForm } from "./IDataForm";
import { UserData } from "./userData";

class GetData extends Component<IFormWebPartProps , {}> {

    state = {
        items : []
    }


    public render() : ReactElement<IFormWebPartProps> {
        return (
            <div>
                <ul>
                    {
                    //    JSON.stringify(
                        this.state.items.map(function(item : IDataForm , key) {
                            return <div key={key}>{item.Title} , {item.email}</div>; 
                      })
                    }
                </ul>
          </div>
        );
    }

    async componentDidMount(): Promise<void> {
        // debugger;
        await this.getDateFormList();
    }

    private  async getDateFormList() : Promise<void> {
           await pnp.sp.web.lists.getByTitle('MyDbList').items.get().then((response) => {
            const users = response.map(item  => new UserData(item));
             this.setState({items : users});
            //  console.log(response)
        })
    }
 
} 

export default GetData;