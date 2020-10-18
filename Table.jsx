import React from 'react';

export default class extends React.Component{
    render(){
        return (<div>
            <table><tr><th>Employee ID</th><th>Name</th><th>Email ID</th></tr>
            <tr><td>1</td><td>abc</td><td>abc@abc.com</td></tr>
            <tr><td>2</td><td>def</td><td>def@def.com</td></tr>
            <tr><td>3</td><td>ghi</td><td>ghi@ghi.com</td></tr>
            </table>
        </div>);
    }
}